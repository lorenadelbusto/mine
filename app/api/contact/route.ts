import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 100);
    const email = clean(body.email, 160).toLowerCase();
    const company = clean(body.company, 120);
    const topic = clean(body.topic, 100);
    const message = clean(body.message, 3000);
    if (clean(body.website, 200)) return NextResponse.json({ message: "Mensaje recibido." });
    if (!name || !EMAIL_PATTERN.test(email) || !topic || message.length < 20) {
      return NextResponse.json({ message: "Revisa los datos del formulario e inténtalo nuevamente." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;
    const from = process.env.RESEND_FROM || "Integrar para Crear <onboarding@resend.dev>";
    if (!apiKey || !recipient) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
      return NextResponse.json({ message: "El formulario aún no está configurado. Escríbeme directamente por email." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from, to: [recipient], reply_to: email, subject: `Nueva consulta web: ${topic}`,
        html: `<h2>Nueva consulta desde Integrar para Crear</h2><p><strong>Nombre:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Empresa o proyecto:</strong> ${escapeHtml(company || "No indicado")}</p><p><strong>Tema:</strong> ${escapeHtml(topic)}</p><p><strong>Mensaje:</strong></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });
    if (!response.ok) {
      console.error("Resend request failed", response.status, await response.text());
      return NextResponse.json({ message: "No pudimos enviar tu mensaje. Inténtalo nuevamente." }, { status: 502 });
    }
    return NextResponse.json({ message: "Mensaje enviado." });
  } catch {
    return NextResponse.json({ message: "No pudimos procesar la solicitud." }, { status: 400 });
  }
}
