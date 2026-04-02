import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const serviceLabels = {
  fireplace: 'Fireplace Media Wall',
  tv: 'TV & AV Integration',
  joinery: 'Custom Joinery',
  lighting: 'Mood Lighting',
  tiling: 'Tiling & Cladding',
  full: 'Full Room Transformation',
  unsure: 'Not sure yet — need advice',
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, location, message, service } = body

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }

    const serviceLabel = serviceLabels[service] || 'Not specified'

    // ── 1. Notification email to the business ──────────────────────────────
    await resend.emails.send({
      from: 'Clyde Media Walls <enquiries@clydemediawalls.co.uk>',
      to: 'christopherpreavage25@gmail.com',
      replyTo: email,
      subject: `New Enquiry from ${name} — ${serviceLabel}`,
      html: ownerEmailHtml({ name, email, phone, location, message, service: serviceLabel }),
    })

    // ── 2. Confirmation email back to the customer ─────────────────────────
    await resend.emails.send({
      from: 'Clyde Media Walls <enquiries@clydemediawalls.co.uk>',
      to: email,
      replyTo: 'enquiries@clydemediawalls.co.uk',
      subject: `We've received your enquiry, ${name.split(' ')[0]}`,
      html: customerEmailHtml({ name, service: serviceLabel }),
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}

// ── Owner notification template ─────────────────────────────────────────────
function ownerEmailHtml({ name, email, phone, location, message, service }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Enquiry — Clyde Media Walls</title>
</head>
<body style="margin:0;padding:0;background:#0f1a2e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f1a2e;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a2744 0%,#0f1a2e 100%);border:1px solid rgba(201,168,76,0.25);border-bottom:none;padding:40px 48px 32px;text-align:center;">
              <!-- Gold rule above logo -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:20px;">
                    <table align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:40px;height:1px;background:#c9a84c;font-size:0;line-height:0;">&nbsp;</td>
                        <td style="padding:0 14px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;color:#c9a84c;">New Enquiry</td>
                        <td style="width:40px;height:1px;background:#c9a84c;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <h1 style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:32px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#f8f5ef;">CLYDE MEDIA WALLS</h1>
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#c9a84c;">Glasgow's Premium Media Wall Specialists</p>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#c9a84c,#e2c47a,#c9a84c);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Alert banner -->
          <tr>
            <td style="background:#1a2744;border-left:1px solid rgba(201,168,76,0.25);border-right:1px solid rgba(201,168,76,0.25);padding:20px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);padding:14px 20px;">
                    <p style="margin:0;font-size:13px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#c9a84c;">&#128276; You have a new website enquiry</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Enquiry details -->
          <tr>
            <td style="background:#1a2744;border-left:1px solid rgba(201,168,76,0.25);border-right:1px solid rgba(201,168,76,0.25);padding:8px 48px 32px;">

              <p style="margin:0 0 24px;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#c9a84c;border-bottom:1px solid rgba(201,168,76,0.15);padding-bottom:12px;">Customer Details</p>

              <!-- Detail rows -->
              ${ownerDetailRow('Full Name', name)}
              ${ownerDetailRow('Phone', `<a href="tel:${phone}" style="color:#c9a84c;text-decoration:none;">${phone}</a>`)}
              ${ownerDetailRow('Email', `<a href="mailto:${email}" style="color:#c9a84c;text-decoration:none;">${email}</a>`)}
              ${ownerDetailRow('Location', location || '—')}
              ${ownerDetailRow('Service', service)}

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#c9a84c;">Project Details</p>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:rgba(248,245,239,0.04);border:1px solid rgba(201,168,76,0.15);border-left:3px solid #c9a84c;padding:16px 20px;">
                          <p style="margin:0;font-size:14px;color:rgba(248,245,239,0.8);line-height:1.75;">${message ? message.replace(/\n/g, '<br/>') : '<em style="color:rgba(248,245,239,0.35);">No message provided.</em>'}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your Clyde Media Walls Enquiry&body=Hi ${name.split(' ')[0]}," style="display:inline-block;background:linear-gradient(135deg,#c9a84c,#e2c47a);color:#0f1a2e;font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;padding:15px 36px;text-decoration:none;">Reply to ${name.split(' ')[0]}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#c9a84c,#e2c47a,#c9a84c);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f1a2e;border:1px solid rgba(201,168,76,0.15);border-top:none;padding:24px 48px;text-align:center;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#c9a84c;">Clyde Media Walls</p>
              <p style="margin:0;font-size:11px;color:rgba(248,245,239,0.3);letter-spacing:0.05em;">Glasgow, Scotland &nbsp;·&nbsp; enquiries@clydemediawalls.co.uk</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

function ownerDetailRow(label, value) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:2px;">
    <tr>
      <td style="background:rgba(248,245,239,0.03);border-bottom:1px solid rgba(201,168,76,0.08);padding:12px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="130" style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(201,168,76,0.7);vertical-align:top;padding-right:16px;">${label}</td>
            <td style="font-size:14px;color:#f8f5ef;font-weight:400;">${value}</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`
}

// ── Customer confirmation template ──────────────────────────────────────────
function customerEmailHtml({ name, service }) {
  const firstName = name.split(' ')[0]
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Thanks for getting in touch — Clyde Media Walls</title>
</head>
<body style="margin:0;padding:0;background:#0f1a2e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f1a2e;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a2744 0%,#0f1a2e 100%);border:1px solid rgba(201,168,76,0.25);border-bottom:none;padding:44px 48px 36px;text-align:center;">
              <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                <tr>
                  <td style="width:40px;height:1px;background:#c9a84c;font-size:0;line-height:0;">&nbsp;</td>
                  <td style="padding:0 14px;font-size:10px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;color:#c9a84c;">Glasgow's Finest</td>
                  <td style="width:40px;height:1px;background:#c9a84c;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
              <h1 style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:32px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#f8f5ef;">CLYDE MEDIA WALLS</h1>
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:#c9a84c;">Premium Media Wall Specialists</p>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#c9a84c,#e2c47a,#c9a84c);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Hero message -->
          <tr>
            <td style="background:#1a2744;border-left:1px solid rgba(201,168,76,0.25);border-right:1px solid rgba(201,168,76,0.25);padding:44px 48px 36px;text-align:center;">
              <!-- Big tick -->
              <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="width:64px;height:64px;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);text-align:center;vertical-align:middle;font-size:28px;">&#10003;</td>
                </tr>
              </table>

              <h2 style="margin:0 0 12px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:26px;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;color:#f8f5ef;">Enquiry Received, ${firstName}.</h2>
              <p style="margin:0;font-size:15px;color:rgba(248,245,239,0.65);line-height:1.8;max-width:420px;margin:0 auto;">Thanks for reaching out about <strong style="color:#c9a84c;">${service}</strong>. We've got your details and will be in touch within <strong style="color:#f8f5ef;">24 hours</strong> to arrange your free, no-obligation site survey.</p>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="background:rgba(15,26,46,0.8);border-left:1px solid rgba(201,168,76,0.25);border-right:1px solid rgba(201,168,76,0.25);padding:36px 48px;">
              <p style="margin:0 0 24px;font-size:11px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#c9a84c;text-align:center;">What Happens Next</p>

              ${nextStep('01', 'We Review Your Enquiry', 'Our team will look over your project details and prepare for your consultation.')}
              ${nextStep('02', 'We Give You a Call', 'A member of our team will call you within 24 hours to discuss your vision and answer any questions.')}
              ${nextStep('03', 'Free Home Visit', 'We\'ll arrange a free, no-obligation site survey at a time that suits you — no pressure, ever.')}
              ${nextStep('04', 'Your Dream Room', 'Once you\'re happy, we handle everything from design through to installation.')}
            </td>
          </tr>

          <!-- Contact nudge -->
          <tr>
            <td style="background:#1a2744;border-left:1px solid rgba(201,168,76,0.25);border-right:1px solid rgba(201,168,76,0.25);padding:28px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);padding:20px 24px;text-align:center;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#c9a84c;">Can't wait? Call us directly.</p>
                    <a href="tel:+441410000000" style="font-size:20px;font-weight:800;color:#f8f5ef;text-decoration:none;letter-spacing:0.04em;">0141 000 0000</a>
                    <p style="margin:8px 0 0;font-size:11px;color:rgba(248,245,239,0.35);">Mon – Sat &nbsp;·&nbsp; 8am – 6pm</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#c9a84c,#e2c47a,#c9a84c);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f1a2e;border:1px solid rgba(201,168,76,0.15);border-top:none;padding:28px 48px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#c9a84c;">Clyde Media Walls</p>
              <p style="margin:0 0 14px;font-size:11px;color:rgba(248,245,239,0.3);letter-spacing:0.05em;">Glasgow, Scotland &nbsp;·&nbsp; Mon–Sat 8am–6pm</p>
              <p style="margin:0;font-size:10px;color:rgba(248,245,239,0.2);line-height:1.6;">You're receiving this because you submitted an enquiry on clydemediawalls.co.uk.<br/>To unsubscribe from future emails, reply with "unsubscribe".</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

function nextStep(num, title, body) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
    <tr>
      <td width="48" style="vertical-align:top;padding-right:16px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="width:40px;height:40px;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.25);text-align:center;vertical-align:middle;font-size:11px;font-weight:800;letter-spacing:0.1em;color:#c9a84c;">${num}</td>
          </tr>
        </table>
      </td>
      <td style="vertical-align:top;padding-top:8px;">
        <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#f8f5ef;">${title}</p>
        <p style="margin:0;font-size:13px;color:rgba(248,245,239,0.5);line-height:1.7;font-weight:300;">${body}</p>
      </td>
    </tr>
  </table>`
}