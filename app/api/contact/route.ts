import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("[contact] received submission");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, company, brief } = await req.json();

  if (!name || !email || !brief) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F8FA;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8FA;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#15171A;border-radius:16px 16px 0 0;padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#4A5059;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">New Inquiry</span>
                  <div style="font-size:28px;font-weight:900;color:#FFFFFF;letter-spacing:-0.03em;text-transform:uppercase;margin-top:6px;line-height:1;">
                    HAVAH
                  </div>
                </td>
                <td align="right" valign="top">
                  <span style="display:inline-block;background:#B5642E;border-radius:999px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#FFFFFF;padding:6px 14px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                    New Message
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Sender block -->
        <tr>
          <td style="background:#FFFFFF;padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #DDE1E8;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid #DDE1E8;">
                  <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#98A0AD;margin-bottom:4px;">From</div>
                  <div style="font-size:17px;font-weight:700;color:#15171A;letter-spacing:-0.01em;">${name}</div>
                  <div style="font-size:13px;color:#6B7280;margin-top:2px;">${email}</div>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:16px 24px;border-bottom:1px solid #DDE1E8;">
                  <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#98A0AD;margin-bottom:4px;">Company</div>
                  <div style="font-size:15px;color:#15171A;">${company}</div>
                </td>
              </tr>` : ""}
            </table>
          </td>
        </tr>

        <!-- Message block -->
        <tr>
          <td style="background:#FFFFFF;padding:20px 40px 0;">
            <div style="font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:#98A0AD;margin-bottom:12px;">Their Brief</div>
            <div style="background:#F7F8FA;border:1px solid #DDE1E8;border-radius:12px;padding:24px;font-size:15px;line-height:1.7;color:#212429;white-space:pre-wrap;">${brief}</div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#FFFFFF;padding:28px 40px;">
            <a href="mailto:${email}?subject=Re: Your inquiry to HAVAH"
               style="display:block;background:#B5642E;color:#FFFFFF;text-align:center;text-decoration:none;font-weight:700;font-size:14px;letter-spacing:0.02em;padding:16px;border-radius:999px;">
              Reply to ${name} ↗
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#15171A;border-radius:0 0 16px 16px;padding:24px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <span style="font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:#4A5059;font-weight:700;">HAVAH Studios</span>
                </td>
                <td align="right">
                  <span style="font-size:11px;color:#4A5059;">Los Angeles, CA</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "New Project Inquiry <onboarding@resend.dev>",
    to: "havahstudios@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` · ${company}` : ""}`,
    html,
  });

  if (error) {
    console.error("[contact] send error", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  console.log("[contact] email sent successfully");
  return NextResponse.json({ ok: true });
}
