import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, phone, location, message, service } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const serviceLabels = {
      fireplace: 'Fireplace Media Wall',
      tv: 'TV & AV Integration',
      joinery: 'Custom Joinery',
      lighting: 'Mood Lighting',
      tiling: 'Tiling & Cladding',
      full: 'Full Room Transformation',
      unsure: 'Not sure yet — needs advice',
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin:0;padding:0;background:#0f1a2e;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1a2e;padding:40px 20px;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a2744;border:1px solid rgba(201,168,76,0.3);">
              <!-- Header -->
              <tr><td style="background:linear-gradient(135deg,#1a2744,#243055);padding:32px 40px;border-bottom:2px solid #c9a84c;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <div style="font-family:Arial,sans-serif;font-size:22px;font-weight:bold;color:#f8f5ef;letter-spacing:2px;text-transform:uppercase;">CLYDE MEDIA WALLS</div>
                      <div style="font-size:11px;color:#c9a84c;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">Scotland · New Enquiry</div>
                    </td>
                    <td align="right">
                      <div style="background:rgba(201,168,76,0.15);border:1px solid #c9a84c;padding:8px 16px;display:inline-block;">
                        <span style="color:#c9a84c;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">NEW LEAD</span>
                      </div>
                    </td>
                  </tr>
                </table>
              </td></tr>
              <!-- Body -->
              <tr><td style="padding:40px;">
                <p style="color:rgba(248,245,239,0.6);font-size:14px;margin:0 0 28px 0;">You have received a new enquiry from the Clyde Media Walls website.</p>
                <!-- Details table -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${[
                    ['Name', name],
                    ['Phone', phone],
                    ['Email', email],
                    ['Location', location || 'Not provided'],
                    ['Service', serviceLabels[service] || service || 'Not specified'],
                  ].map(([label, value]) => `
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(201,168,76,0.1);">
                      <span style="font-size:11px;color:#c9a84c;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">${label}</span>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(201,168,76,0.1);text-align:right;">
                      <span style="font-size:14px;color:#f8f5ef;">${value}</span>
                    </td>
                  </tr>`).join('')}
                </table>
                <!-- Message -->
                ${message ? `
                <div style="margin-top:28px;padding:20px;background:rgba(201,168,76,0.08);border-left:3px solid #c9a84c;">
                  <div style="font-size:11px;color:#c9a84c;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;font-weight:bold;">Message</div>
                  <p style="color:rgba(248,245,239,0.8);font-size:14px;line-height:1.7;margin:0;">${message}</p>
                </div>` : ''}
                <!-- CTA -->
                <div style="margin-top:32px;text-align:center;">
                  <a href="tel:${phone.replace(/\s/g,'')}" style="display:inline-block;background:linear-gradient(135deg,#c9a84c,#e2c47a);color:#0f1a2e;font-weight:bold;font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:14px 36px;text-decoration:none;">CALL BACK NOW</a>
                </div>
              </td></tr>
              <!-- Footer -->
              <tr><td style="padding:20px 40px;border-top:1px solid rgba(201,168,76,0.15);text-align:center;">
                <p style="color:rgba(248,245,239,0.3);font-size:11px;margin:0;">Clyde Media Walls · Glasgow, Scotland · clydemediawalls.co.uk</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: `"Clyde Media Walls Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Enquiry from ${name} — Clyde Media Walls`,
      html: htmlEmail,
    })

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"Clyde Media Walls" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We've received your enquiry — Clyde Media Walls",
      html: `
        <!DOCTYPE html><html><body style="margin:0;padding:0;background:#0f1a2e;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1a2e;padding:40px 20px;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1a2744;border:1px solid rgba(201,168,76,0.3);">
              <tr><td style="background:linear-gradient(135deg,#1a2744,#243055);padding:32px 40px;border-bottom:2px solid #c9a84c;">
                <div style="font-size:22px;font-weight:bold;color:#f8f5ef;letter-spacing:2px;text-transform:uppercase;">CLYDE MEDIA WALLS</div>
                <div style="font-size:11px;color:#c9a84c;letter-spacing:3px;text-transform:uppercase;margin-top:4px;">Scotland</div>
              </td></tr>
              <tr><td style="padding:40px;">
                <h2 style="color:#f8f5ef;font-size:20px;margin:0 0 16px 0;">Thanks for getting in touch, ${name.split(' ')[0]}!</h2>
                <p style="color:rgba(248,245,239,0.7);font-size:14px;line-height:1.8;margin:0 0 16px 0;">We've received your enquiry and one of our team will be in touch within <strong style="color:#c9a84c;">24 hours</strong> to discuss your project and arrange a <strong style="color:#c9a84c;">free, no-obligation site survey</strong>.</p>
                <p style="color:rgba(248,245,239,0.7);font-size:14px;line-height:1.8;margin:0 0 28px 0;">In the meantime, if you'd like to speak to us directly, don't hesitate to call:</p>
                <div style="text-align:center;margin-bottom:32px;">
                  <a href="tel:+441410000000" style="display:inline-block;background:linear-gradient(135deg,#c9a84c,#e2c47a);color:#0f1a2e;font-weight:bold;font-size:16px;letter-spacing:1px;padding:14px 40px;text-decoration:none;">📞 0141 000 0000</a>
                </div>
                <p style="color:rgba(248,245,239,0.4);font-size:12px;line-height:1.7;margin:0;">Kind regards,<br/><strong style="color:#c9a84c;">The Clyde Media Walls Team</strong><br/>Glasgow, Scotland</p>
              </td></tr>
              <tr><td style="padding:20px 40px;border-top:1px solid rgba(201,168,76,0.15);text-align:center;">
                <p style="color:rgba(248,245,239,0.25);font-size:11px;margin:0;">© ${new Date().getFullYear()} Clyde Media Walls · clydemediawalls.co.uk</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
        </body></html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
