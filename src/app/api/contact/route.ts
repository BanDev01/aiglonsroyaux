import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, phone, email, subject, message } = parsed.data;

  try {
    await sendNotificationEmail({
      subject: `Nouveau message de contact — ${subject}`,
      heading: "Nouveau message depuis le site web",
      rows: [
        { label: "Nom", value: name },
        { label: "Téléphone", value: phone },
        { label: "Email", value: email },
        { label: "Objet", value: subject },
        { label: "Message", value: message },
      ],
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }
}
