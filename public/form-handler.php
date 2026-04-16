<?php
declare(strict_types=1);

$recipient = 'info@cliniqueduvr.ca';
$brandName = 'Clinique du VR';
$siteHost = 'www.cliniqueduvr.ca';
$maxFileSize = 10 * 1024 * 1024;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Method Not Allowed');
}

if (!empty($_POST['_honey'])) {
    redirectToNext($_POST['_next'] ?? '/contact/?sent=1');
}

$subject = trim((string) ($_POST['_subject'] ?? "Nouveau message du formulaire {$brandName}"));
$nextUrl = sanitizeNextUrl((string) ($_POST['_next'] ?? '/contact/?sent=1'), $siteHost);
$fields = extractFields($_POST);
$replyTo = findReplyTo($fields);

$htmlBody = buildHtmlBody($brandName, $fields);
$textBody = buildTextBody($brandName, $fields);

$boundary = 'mixed_' . bin2hex(random_bytes(12));
$headers = [
    'MIME-Version: 1.0',
    "From: {$brandName} <{$recipient}>",
];

if ($replyTo !== '') {
    $headers[] = "Reply-To: {$replyTo}";
}

$headers[] = "Content-Type: multipart/mixed; boundary=\"{$boundary}\"";

$message = [];
$message[] = "This is a multi-part message in MIME format.";
$message[] = "--{$boundary}";
$message[] = "Content-Type: multipart/alternative; boundary=\"alt_{$boundary}\"";
$message[] = '';
$message[] = "--alt_{$boundary}";
$message[] = 'Content-Type: text/plain; charset="UTF-8"';
$message[] = 'Content-Transfer-Encoding: 8bit';
$message[] = '';
$message[] = $textBody;
$message[] = "--alt_{$boundary}";
$message[] = 'Content-Type: text/html; charset="UTF-8"';
$message[] = 'Content-Transfer-Encoding: 8bit';
$message[] = '';
$message[] = $htmlBody;
$message[] = "--alt_{$boundary}--";

foreach (normalizeFiles($_FILES) as $file) {
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        continue;
    }

    $size = (int) ($file['size'] ?? 0);
    if ($size <= 0 || $size > $maxFileSize) {
        continue;
    }

    $tmpName = (string) ($file['tmp_name'] ?? '');
    if ($tmpName === '' || !is_uploaded_file($tmpName)) {
        continue;
    }

    $filename = sanitizeFilename((string) ($file['name'] ?? 'attachment'));
    $mimeType = detectMimeType($tmpName);
    $content = chunk_split(base64_encode((string) file_get_contents($tmpName)));

    $message[] = "--{$boundary}";
    $message[] = "Content-Type: {$mimeType}; name=\"{$filename}\"";
    $message[] = 'Content-Transfer-Encoding: base64';
    $message[] = "Content-Disposition: attachment; filename=\"{$filename}\"";
    $message[] = '';
    $message[] = $content;
}

$message[] = "--{$boundary}--";

$mailSent = mail($recipient, encodeHeader($subject), implode("\r\n", $message), implode("\r\n", $headers));

if (!$mailSent) {
    http_response_code(500);
    exit('Unable to send message at this time.');
}

redirectToNext($nextUrl);

function extractFields(array $post): array
{
    $fields = [];

    foreach ($post as $key => $value) {
        if (!is_string($key) || $key === '' || $key[0] === '_') {
            continue;
        }

        $normalizedKey = str_replace('_', ' ', trim($key));

        if (is_array($value)) {
            $cleanValues = array_values(array_filter(array_map(
                static fn($item): string => trim((string) $item),
                $value
            ), static fn(string $item): bool => $item !== ''));

            if ($cleanValues === []) {
                continue;
            }

            $fields[$normalizedKey] = $cleanValues;
            continue;
        }

        $cleanValue = trim((string) $value);
        if ($cleanValue === '') {
            continue;
        }

        $fields[$normalizedKey] = $cleanValue;
    }

    return $fields;
}

function buildHtmlBody(string $brandName, array $fields): string
{
    $submittedAt = (new DateTimeImmutable('now', new DateTimeZone('UTC')))->format('Y-m-d H:i:s \\U\\T\\C');
    $rows = '';

    foreach ($fields as $label => $value) {
        $displayValue = is_array($value)
            ? implode('<br>', array_map('escapeHtml', $value))
            : nl2br(escapeHtml((string) $value));

        $rows .= '<tr>'
            . '<th align="left" style="padding:12px 14px;border:1px solid #d7dee8;background:#f4f7fb;font-family:Arial,sans-serif;font-size:14px;color:#14324a;vertical-align:top;">'
            . escapeHtml($label)
            . '</th>'
            . '<td style="padding:12px 14px;border:1px solid #d7dee8;font-family:Arial,sans-serif;font-size:14px;color:#1f2e3b;">'
            . $displayValue
            . '</td>'
            . '</tr>';
    }

    return '<!doctype html><html lang="fr"><body style="margin:0;padding:24px;background:#eef3f7;">'
        . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #d7dee8;border-radius:16px;overflow:hidden;">'
        . '<tr><td style="padding:24px 28px;background:#14324a;color:#ffffff;font-family:Arial,sans-serif;">'
        . '<h1 style="margin:0;font-size:24px;line-height:1.2;">Nouveau message - ' . escapeHtml($brandName) . '</h1>'
        . '<p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:#dce6ef;">Soumission recue via le site web.</p>'
        . '</td></tr>'
        . '<tr><td style="padding:24px 28px;">'
        . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">'
        . $rows
        . '</table>'
        . '<p style="margin:20px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#687786;">Recu le ' . escapeHtml($submittedAt) . '</p>'
        . '</td></tr>'
        . '</table>'
        . '</body></html>';
}

function buildTextBody(string $brandName, array $fields): string
{
    $submittedAt = (new DateTimeImmutable('now', new DateTimeZone('UTC')))->format('Y-m-d H:i:s \\U\\T\\C');
    $lines = ["Nouveau message - {$brandName}", ''];

    foreach ($fields as $label => $value) {
        $lines[] = $label . ':';
        if (is_array($value)) {
            foreach ($value as $item) {
                $lines[] = '- ' . $item;
            }
        } else {
            $lines[] = (string) $value;
        }
        $lines[] = '';
    }

    $lines[] = "Recu le {$submittedAt}";

    return implode("\n", $lines);
}

function findReplyTo(array $fields): string
{
    foreach ($fields as $label => $value) {
        if (!is_string($value)) {
            continue;
        }

        $normalized = mb_strtolower($label);
        if (str_contains($normalized, 'courriel') || $normalized === 'email') {
            $email = filter_var(trim($value), FILTER_VALIDATE_EMAIL);
            if ($email !== false) {
                return $email;
            }
        }
    }

    return '';
}

function normalizeFiles(array $files): array
{
    $normalized = [];

    foreach ($files as $fieldName => $fileData) {
        if (!isset($fileData['name'])) {
            continue;
        }

        if (is_array($fileData['name'])) {
            $count = count($fileData['name']);
            for ($index = 0; $index < $count; $index++) {
                $normalized[] = [
                    'name' => $fileData['name'][$index] ?? '',
                    'type' => $fileData['type'][$index] ?? '',
                    'tmp_name' => $fileData['tmp_name'][$index] ?? '',
                    'error' => $fileData['error'][$index] ?? UPLOAD_ERR_NO_FILE,
                    'size' => $fileData['size'][$index] ?? 0,
                    'field' => $fieldName,
                ];
            }
            continue;
        }

        $normalized[] = $fileData + ['field' => $fieldName];
    }

    return $normalized;
}

function sanitizeFilename(string $filename): string
{
    $clean = preg_replace('/[^A-Za-z0-9._-]/', '-', $filename) ?? 'attachment';
    return trim($clean, '-.') ?: 'attachment';
}

function detectMimeType(string $path): string
{
    if (function_exists('mime_content_type')) {
        $type = mime_content_type($path);
        if (is_string($type) && $type !== '') {
            return $type;
        }
    }

    return 'application/octet-stream';
}

function sanitizeNextUrl(string $nextUrl, string $siteHost): string
{
    $nextUrl = trim($nextUrl);
    if ($nextUrl === '') {
        return '/contact/?sent=1';
    }

    $parts = parse_url($nextUrl);
    if ($parts === false) {
        return '/contact/?sent=1';
    }

    if (!isset($parts['host'])) {
        return $nextUrl[0] === '/' ? $nextUrl : '/contact/?sent=1';
    }

    if (($parts['scheme'] ?? 'https') !== 'https' || $parts['host'] !== $siteHost) {
        return '/contact/?sent=1';
    }

    return $nextUrl;
}

function redirectToNext(string $nextUrl): void
{
    header('Location: ' . $nextUrl, true, 303);
    exit;
}

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function encodeHeader(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}
