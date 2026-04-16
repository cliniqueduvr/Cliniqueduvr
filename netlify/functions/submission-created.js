const RESEND_API_URL = 'https://api.resend.com/emails';

export async function handler(event) {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const resendFromEmail = process.env.RESEND_FROM_EMAIL?.trim();
  const resendToEmail = process.env.RESEND_TO_EMAIL?.trim();

  if (!resendApiKey || !resendFromEmail || !resendToEmail) {
    console.error('Missing Resend configuration. Expected RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL.');
    return {
      statusCode: 200,
      body: 'Skipped: missing Resend configuration.'
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    console.error('Invalid submission-created payload.', error);
    return {
      statusCode: 400,
      body: 'Invalid payload.'
    };
  }

  const submission = payload.payload || payload;
  const formName = String(submission.form_name || submission.formName || 'formulaire');
  const createdAt = submission.created_at || submission.createdAt || new Date().toISOString();
  const submissionNumber = submission.number || submission.id || '';
  const data = normalizeFields(submission.data || submission.form_data || {});
  const locale = formName.includes('-en') ? 'en' : 'fr';
  const replyTo = typeof data.email === 'string' && data.email.includes('@') ? data.email : undefined;
  const senderName = firstString(data.name) || firstString(data['Nom complet']) || firstString(data['Full name']);
  const subject = buildSubject(locale, formName, senderName, submissionNumber);
  const html = buildHtmlEmail({ locale, formName, createdAt, submissionNumber, data });
  const text = buildTextEmail({ locale, formName, createdAt, submissionNumber, data });

  const resendBody = {
    from: resendFromEmail,
    to: splitRecipients(resendToEmail),
    subject,
    html,
    text
  };

  if (replyTo) {
    resendBody.reply_to = replyTo;
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resendBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Resend API error:', response.status, errorText);
    return {
      statusCode: 500,
      body: 'Resend request failed.'
    };
  }

  return {
    statusCode: 200,
    body: 'Email sent.'
  };
}

function normalizeFields(rawData) {
  const entries = Object.entries(rawData || {});
  const result = {};

  for (const [key, value] of entries) {
    if (key === 'form-name' || key === 'bot-field' || key === 'Page') {
      result[key] = value;
      continue;
    }

    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (!trimmed) continue;

      const parsedJson = tryParseJson(trimmed);
      result[key] = parsedJson ?? trimmed;
      continue;
    }

    if (Array.isArray(value)) {
      const cleaned = value.map((item) => String(item).trim()).filter(Boolean);
      if (cleaned.length > 0) {
        result[key] = cleaned;
      }
      continue;
    }

    if (value != null && value !== '') {
      result[key] = value;
    }
  }

  return result;
}

function buildSubject(locale, formName, senderName, submissionNumber) {
  const prefixes = {
    fr: 'Nouvelle demande',
    en: 'New submission'
  };
  const label = prefixes[locale] || prefixes.fr;
  const suffix = senderName ? ` - ${senderName}` : '';
  const ref = submissionNumber ? ` (#${submissionNumber})` : '';
  return `${label} Clinique du VR${suffix}${ref}`;
}

function buildHtmlEmail({ locale, formName, createdAt, submissionNumber, data }) {
  const labels = getFieldLabels(locale);
  const rows = Object.entries(data)
    .filter(([key]) => key !== 'bot-field' && key !== 'form-name')
    .map(([key, value]) => {
      const label = labels[key] || key;
      const displayValue = formatValueHtml(value);
      return `
        <tr>
          <th align="left" style="padding:12px 14px;border:1px solid #d7dee8;background:#f4f7fb;font-family:Arial,sans-serif;font-size:14px;color:#14324a;vertical-align:top;">
            ${escapeHtml(label)}
          </th>
          <td style="padding:12px 14px;border:1px solid #d7dee8;font-family:Arial,sans-serif;font-size:14px;color:#1f2e3b;">
            ${displayValue}
          </td>
        </tr>
      `;
    })
    .join('');

  const intro = locale === 'en'
    ? 'A new contact form submission has been received.'
    : 'Une nouvelle soumission de formulaire a été reçue.';
  const metaLabel = locale === 'en'
    ? `Form: ${escapeHtml(formName)}`
    : `Formulaire: ${escapeHtml(formName)}`;
  const submittedLabel = locale === 'en'
    ? `Received: ${escapeHtml(formatDate(createdAt, locale))}`
    : `Reçu: ${escapeHtml(formatDate(createdAt, locale))}`;
  const refLabel = submissionNumber
    ? locale === 'en'
      ? `Reference: #${escapeHtml(String(submissionNumber))}`
      : `Référence: #${escapeHtml(String(submissionNumber))}`
    : '';

  return `<!doctype html>
  <html lang="${locale === 'en' ? 'en' : 'fr'}">
    <body style="margin:0;padding:24px;background:#eef3f7;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #d7dee8;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:24px 28px;background:#14324a;color:#ffffff;font-family:Arial,sans-serif;">
            <h1 style="margin:0;font-size:24px;line-height:1.2;">Clinique du VR</h1>
            <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:#dce6ef;">${intro}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 28px 0;font-family:Arial,sans-serif;font-size:13px;color:#687786;">
            <p style="margin:0 0 6px;">${metaLabel}</p>
            <p style="margin:0 0 6px;">${submittedLabel}</p>
            ${refLabel ? `<p style="margin:0 0 6px;">${refLabel}</p>` : ''}
          </td>
        </tr>
        <tr>
          <td style="padding:18px 28px 28px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              ${rows}
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function buildTextEmail({ locale, formName, createdAt, submissionNumber, data }) {
  const labels = getFieldLabels(locale);
  const lines = [
    locale === 'en' ? 'New submission - Clinique du VR' : 'Nouvelle soumission - Clinique du VR',
    locale === 'en' ? `Form: ${formName}` : `Formulaire: ${formName}`,
    locale === 'en' ? `Received: ${formatDate(createdAt, locale)}` : `Reçu: ${formatDate(createdAt, locale)}`
  ];

  if (submissionNumber) {
    lines.push(locale === 'en' ? `Reference: #${submissionNumber}` : `Référence: #${submissionNumber}`);
  }

  lines.push('');

  for (const [key, value] of Object.entries(data)) {
    if (key === 'bot-field' || key === 'form-name') continue;
    lines.push(`${labels[key] || key}:`);
    lines.push(formatValueText(value));
    lines.push('');
  }

  return lines.join('\n');
}

function formatValueHtml(value) {
  const items = Array.isArray(value) ? value : [value];
  return items
    .map((item) => {
      const text = String(item);
      if (isUrl(text)) {
        return `<a href="${escapeHtml(text)}" style="color:#1f3a5f;">${escapeHtml(text)}</a>`;
      }

      return escapeHtml(text).replace(/\n/g, '<br>');
    })
    .join('<br>');
}

function formatValueText(value) {
  const items = Array.isArray(value) ? value : [value];
  return items.map((item) => `- ${String(item)}`).join('\n');
}

function splitRecipients(value) {
  return value.split(',').map((item) => item.trim()).filter(Boolean);
}

function firstString(value) {
  if (typeof value === 'string') return value.trim();
  if (Array.isArray(value) && typeof value[0] === 'string') return value[0].trim();
  return '';
}

function tryParseJson(value) {
  if (!value.startsWith('[') && !value.startsWith('{')) return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function formatDate(value, locale) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-CA' : 'fr-CA', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Toronto'
  }).format(date);
}

function getFieldLabels(locale) {
  if (locale === 'en') {
    return {
      Page: 'Page',
      name: 'Full name',
      email: 'Email',
      Phone: 'Phone',
      'Requested services': 'Requested services',
      'Type of work': 'Type of work',
      'Work address': 'Work address',
      'RV make and year': 'RV make and year',
      'Serial number': 'Serial number',
      Attachment: 'Attachment',
      Subject: 'Subject',
      message: 'Message'
    };
  }

  return {
    Page: 'Page',
    name: 'Nom complet',
    email: 'Courriel',
    'Téléphone': 'Téléphone',
    'Services demandés': 'Services demandés',
    'Type d’intervention': 'Type d’intervention',
    'Adresse des travaux': 'Adresse des travaux',
    'Marque et année du VR': 'Marque et année du VR',
    'Numéro de série': 'Numéro de série',
    'Pièce jointe': 'Pièce jointe',
    'Sujet': 'Sujet',
    message: 'Message'
  };
}

function isUrl(value) {
  return /^https?:\/\//i.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
