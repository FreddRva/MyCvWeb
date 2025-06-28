// /src/app/api/send-email/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["rvethan70@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
