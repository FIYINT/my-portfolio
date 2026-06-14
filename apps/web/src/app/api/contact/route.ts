import { sendEmail } from '@/app/api/utils/send-email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    await sendEmail({
      to: process.env.CONTACT_EMAIL_RECIPIENT || 'your@email.com',
      from: 'onboarding@resend.dev',
      subject: `Portfolio Inquiry: ${subject || 'General'} — from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F9FAFB; border-radius: 12px;">
          <h2 style="color: #111827; font-size: 20px; font-weight: 600; margin-bottom: 8px;">New Portfolio Inquiry</h2>
          <p style="color: #6B7280; font-size: 13px; margin-bottom: 24px; border-bottom: 1px solid #E5E7EB; padding-bottom: 16px;">Submitted via your portfolio contact form</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9CA3AF;">Name</span>
                <p style="color: #111827; font-size: 14px; margin: 4px 0 0;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9CA3AF;">Email</span>
                <p style="color: #111827; font-size: 14px; margin: 4px 0 0;">${email}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9CA3AF;">Interest</span>
                <p style="color: #111827; font-size: 14px; margin: 4px 0 0;">${subject}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9CA3AF;">Message</span>
                <p style="color: #374151; font-size: 14px; line-height: 1.6; margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 12px 16px; background: #EFF6FF; border-radius: 8px; border: 1px solid #DBEAFE;">
            <p style="color: #1D4ED8; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `New Portfolio Inquiry\n\nName: ${name}\nEmail: ${email}\nInterest: ${subject}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
