"use client";

import { useState } from "react";

const lenses = [
  { name: "Estrategia", detail: "Define el rumbo, las prioridades y las decisiones que sostienen la solución.", result: "Dirección y foco" },
  { name: "Personas", detail: "Hace visibles las necesidades, motivaciones y experiencias que realmente importan.", result: "Relevancia" },
  { name: "Negocio", detail: "Conecta la propuesta con valor, viabilidad, alcance y sostenibilidad económica.", result: "Viabilidad" },
  { name: "Diseño", detail: "Ordena los componentes y les da una forma clara, coherente y fácil de experimentar.", result: "Coherencia" },
  { name: "Aprendizaje", detail: "Transforma conocimiento en comprensión, práctica y nuevas capacidades.", result: "Aplicación" },
  { name: "Tecnología", detail: "Amplía las posibilidades de implementación, evolución y escala de una idea.", result: "Posibilidad" },
];

export default function IntegrationMap() {
  const [active, setActive] = useState(0);
  const selected = lenses[active];

  return (
    <section className="integration-map section" aria-labelledby="map-title">
      <div className="section-tag">Mapa de integración — Explora las conexiones</div>
      <div className="map-heading">
        <div><p className="kicker">Una mirada en movimiento</p><h2 id="map-title">Cada perspectiva cambia<br /><em>la forma de la solución.</em></h2></div>
        <p>Selecciona una disciplina para descubrir qué aporta. El resultado no aparece al sumarlas: aparece al conectarlas con intención.</p>
      </div>
      <div className="map-shell">
        <div className="map-visual" aria-label="Disciplinas conectadas alrededor de una solución">
          <i className="map-axis axis-one" aria-hidden="true" /><i className="map-axis axis-two" aria-hidden="true" /><i className="map-axis axis-three" aria-hidden="true" />
          <div className="map-core" aria-live="polite"><span>Integro para</span><strong>Crear</strong><small>{selected.result}</small></div>
          {lenses.map((lens, index) => <button key={lens.name} className={`map-node node-${index + 1} ${active === index ? "active" : ""}`} onClick={() => setActive(index)} aria-pressed={active === index}><span>0{index + 1}</span>{lens.name}</button>)}
        </div>
        <div className="map-detail" aria-live="polite">
          <div className="map-detail-index">0{active + 1} / 06</div>
          <p className="kicker">La lente de</p><h3>{selected.name}</h3><p>{selected.detail}</p>
          <div className="map-result"><span>Lo que aporta</span><strong>{selected.result}</strong></div>
          <div className="map-selector" aria-label="Cambiar disciplina">{lenses.map((lens, index) => <button key={lens.name} onClick={() => setActive(index)} aria-label={`Ver ${lens.name}`} className={active === index ? "active" : ""} />)}</div>
        </div>
      </div>
    </section>
  );
}
