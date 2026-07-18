"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { from: "assistant" | "visitor"; text: string };
const prompts = ["¿Cómo puede ayudarme Lore?", "Quiero una consultoría", "¿Qué ideas comparte?"];

function answerFor(raw: string) {
  const text = raw.toLocaleLowerCase("es");
  if (/hola|buenas|hey|qué tal/.test(text)) return "¡Hola! Soy el asistente de Lore. Puedo contarte sobre su enfoque, consultorías, experiencia, metodología, proyectos o ideas. ¿Qué te gustaría explorar?";
  if (/consultor|sesión|asesor|acompañamiento/.test(text)) return "Lore ofrece tres formas de consultoría: una sesión estratégica para aclarar una decisión, una consultoría por proyecto para estructurar una solución y un acompañamiento periódico durante la implementación. Puedes contarle tu desafío en el formulario de contacto.";
  if (/artículo|articulos|ideas|escribe|contenido|publica/.test(text)) return "En Ideas, Lore compartirá artículos originales sobre producto, aprendizaje corporativo, pricing, innovación y las conexiones entre estas disciplinas. La sección ya presenta los primeros temas que está preparando.";
  if (/ayudar|servicio|necesito|empresa|organización|equipo/.test(text)) return "Lore ayuda a convertir desafíos complejos en soluciones concretas: productos, experiencias de aprendizaje, propuestas de valor, estrategias de pricing, innovación y posicionamiento. Su aporte está en conectar negocio, personas, diseño y ejecución.";
  if (/cómo trabaja|metodolog|proceso|manera/.test(text)) return "Su proceso tiene seis momentos: Comprender, Conectar, Definir, Crear, Implementar y Evolucionar. Primero investiga el verdadero desafío; después ordena las perspectivas y lleva la solución a la práctica, aprendiendo de los resultados.";
  if (/fivra|fashion|moda|inteligencia artificial|\bai\b/.test(text)) return "FIVRA es un proyecto AI FashionTech que demuestra la visión de producto de Lore: identificación de necesidades, propuesta de valor, priorización, validación y experiencia de usuario con inteligencia artificial. Es una evidencia de su enfoque, no la totalidad de su perfil.";
  if (/pricing|precio|costos|margen|viabilidad|modelo de negocio/.test(text)) return "Lore conecta la promesa de valor con costos, márgenes, alcance y sostenibilidad. Puede estructurar paquetes, evaluar viabilidad y acompañar decisiones de precio sin perder de vista la experiencia del cliente.";
  if (/capacitación|aprendizaje|programa|curricular|educa/.test(text)) return "Diseña programas y experiencias de aprendizaje alineados con desafíos organizacionales. Integra contenidos, especialistas, metodología y gestión curricular para que el conocimiento sea realmente aplicable.";
  if (/producto|digital|roadmap|experiencia|ux/.test(text)) return "En producto, Lore puede acompañar desde la identificación de necesidades y la propuesta de valor hasta la priorización, el roadmap, la experiencia, la validación y la mejora.";
  if (/contact|correo|reunión|conversar|hablar|propuesta|contratar/.test(text)) return "Puedes iniciar una conversación desde el formulario de la web o escribiendo a hola@lorenadelbusto.com. Cuéntale brevemente el desafío, el contexto y qué te gustaría hacer posible.";
  if (/quién|sobre lore|lorena|trayectoria|perfil/.test(text)) return "Lorena del Busto integra estrategia, creatividad, negocio y comprensión de las personas. Su experiencia cruza producto, aprendizaje corporativo, pricing, innovación, marketing y emprendimiento digital.";
  if (/gracias|perfecto|genial/.test(text)) return "¡Con gusto! Si quieres, también puedo ayudarte a identificar qué formato de consultoría o área de la experiencia de Lore encaja mejor con tu desafío.";
  return "Puedo orientarte sobre las consultorías de Lore, su enfoque, diseño de productos, aprendizaje corporativo, pricing, innovación, FIVRA o sus próximos artículos. ¿Cuál de estos temas se acerca más a lo que necesitas?";
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "assistant", text: "Hola, soy el asistente de Lore. ¿Quieres conocer su enfoque o explorar cómo podría ayudarte?" }]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);
  function send(value: string) {
    const clean = value.trim(); if (!clean || typing) return;
    setMessages((current) => [...current, { from: "visitor", text: clean }]); setInput(""); setTyping(true);
    window.setTimeout(() => { setMessages((current) => [...current, { from: "assistant", text: answerFor(clean) }]); setTyping(false); }, 550);
  }
  function submit(event: FormEvent) { event.preventDefault(); send(input); }
  return <div className={`chatbot ${open ? "is-open" : ""}`}>
    {open && <section className="chat-panel" aria-label="Asistente conversacional" aria-live="polite">
      <header className="chat-head"><div className="chat-avatar">L</div><div><strong>Asistente de Lore</strong><span><i /> En línea</span></div><button onClick={() => setOpen(false)} aria-label="Cerrar asistente">×</button></header>
      <div className="chat-body"><div className="chat-intro">Integrar para Crear <span>·</span> Asistente virtual</div>
        {messages.map((message, index) => <div className={`message ${message.from}`} key={`${message.from}-${index}`}>{message.text}</div>)}
        {typing && <div className="message assistant typing" aria-label="Escribiendo"><span /><span /><span /></div>}
        {messages.length === 1 && <div className="chat-prompts">{prompts.map((prompt) => <button key={prompt} onClick={() => send(prompt)}>{prompt}<span>↗</span></button>)}</div>}<div ref={endRef} />
      </div>
      <form className="chat-form" onSubmit={submit}><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu pregunta…" aria-label="Escribe tu pregunta" autoComplete="off" /><button type="submit" aria-label="Enviar mensaje" disabled={!input.trim() || typing}>↑</button></form>
      <small>Respuestas informativas · No comparte tus datos</small>
    </section>}
    <button className="chat-launcher" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar asistente" : "Abrir asistente conversacional"} aria-expanded={open}>{open ? <span className="close-icon">×</span> : <><span className="chat-mark"><i /><i /><i /></span><b>Pregúntame</b></>}</button>
  </div>;
}
