import { Resend } from "resend";
import { siteConfig } from "@/data/site";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM = process.env.RESEND_FROM_EMAIL ?? "Site Aiglons Royaux <onboarding@resend.dev>";

export async function sendNotificationEmail(params: {
  subject: string;
  heading: string;
  rows: { label: string; value: string }[];
}) {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY manquant — email non envoyé (mode démo). Détails :",
      params
    );
    return { skipped: true as const };
  }

  const rowsHtml = params.rows
    .map(
      (row) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#0A3D91;white-space:nowrap;vertical-align:top;">${row.label}</td><td style="padding:8px 12px;color:#1f2937;">${escapeHtml(
          row.value
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <div style="background:#0A3D91;padding:20px 24px;border-radius:12px 12px 0 0;">
        <h1 style="color:#F5B400;font-size:18px;margin:0;">Les Aiglons Royaux</h1>
        <p style="color:#fff;margin:4px 0 0;font-size:14px;">${params.heading}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
        ${rowsHtml}
      </table>
    </div>
  `;

  return resend.emails.send({
    from: FROM,
    to: siteConfig.contact.email,
    replyTo: params.rows.find((r) => r.label === "Email")?.value,
    subject: params.subject,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");
}
