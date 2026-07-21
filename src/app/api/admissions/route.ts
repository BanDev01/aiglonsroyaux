import { NextResponse } from "next/server";
import { admissionSchema } from "@/lib/validations";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = admissionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, parentName, phone, email, desiredClass, message } = parsed.data;

  try {
    await sendNotificationEmail({
      subject: `Nouvelle demande d'admission — ${name}`,
      heading: "Nouvelle demande d'admission",
      rows: [
        { label: "Enfant", value: name },
        { label: "Parent / tuteur", value: parentName },
        { label: "Téléphone", value: phone },
        { label: "Email", value: email },
        { label: "Classe souhaitée", value: desiredClass },
        { label: "Message", value: message?.trim() || "—" },
      ],
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/admissions]", error);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }
}
