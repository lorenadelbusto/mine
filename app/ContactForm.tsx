"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "No pudimos enviar tu mensaje.");
      setStatus("success");
      setMessage("¡Gracias! Tu mensaje fue enviado. Te responderé pronto.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ocurrió un error. Inténtalo nuevamente.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Nombre<input name="name" type="text" autoComplete="name" maxLength={100} required placeholder="Tu nombre" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" maxLength={160} required placeholder="tu@email.com" /></label>
      </div>
      <label>Empresa o proyecto <span>(opcional)</span><input name="company" type="text" autoComplete="organization" maxLength={120} placeholder="¿Desde dónde me escribes?" /></label>
      <label>¿En qué te gustaría que trabajemos?
        <select name="topic" defaultValue="" required>
          <option value="" disabled>Selecciona una opción</option>
          <option>Sesión de consultoría estratégica</option><option>Consultoría por proyecto</option><option>Acompañamiento a un equipo</option>
          <option>Diseño de producto</option><option>Aprendizaje corporativo</option><option>Pricing y modelo de negocio</option>
          <option>Innovación y procesos</option><option>Marketing y posicionamiento</option><option>Alianza o colaboración</option><option>Otro</option>
        </select>
      </label>
      <label>Cuéntame un poco más<textarea name="message" rows={6} minLength={20} maxLength={3000} required placeholder="Contexto, desafío y qué te gustaría lograr…" /></label>
      <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-submit">
        <button className="button primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar mensaje"} <span>↗</span></button>
        <small>Al enviar, tus datos se usarán únicamente para responder a tu consulta.</small>
      </div>
      {message && <p className={`form-status ${status}`} role="status">{message}</p>}
    </form>
  );
}
