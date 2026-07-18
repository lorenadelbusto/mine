import ChatAssistant from "./ChatAssistant";
import ContactForm from "./ContactForm";

const expertise = [
  { n: "01", title: "Estrategia y diseño de productos", text: "De la necesidad a una propuesta de valor clara, priorizada y lista para evolucionar." },
  { n: "02", title: "Aprendizaje corporativo", text: "Programas y experiencias que conectan conocimiento, personas y desafíos organizacionales." },
  { n: "03", title: "Pricing y modelos de negocio", text: "Decisiones que equilibran valor, alcance, márgenes y sostenibilidad económica." },
  { n: "04", title: "Innovación y procesos", text: "Ideas convertidas en nuevas soluciones, formas de trabajo e iniciativas implementables." },
  { n: "05", title: "Marketing y posicionamiento", text: "Narrativas y experiencias que hacen visible el valor real de un producto." },
  { n: "06", title: "Emprendimiento digital", text: "Conceptos orientados al mercado, validados con foco en experiencia, tecnología y propósito." },
];

const steps = ["Comprender", "Conectar", "Definir", "Crear", "Implementar", "Evolucionar"];

const cases = [
  { type: "Producto · AI FashionTech", title: "FIVRA", text: "De una necesidad cotidiana a un concepto de producto digital que conecta estilo personal, inteligencia artificial y experiencia de usuario.", tags: ["Visión de producto", "Validación", "UX"] },
  { type: "Aprendizaje · Organizaciones", title: "Soluciones corporativas", text: "Programas construidos desde el desafío del negocio, articulando contenidos, especialistas y una experiencia aplicable al trabajo.", tags: ["Diseño curricular", "Experiencia", "Gestión"] },
  { type: "Estrategia · Viabilidad", title: "Propuestas que funcionan", text: "Estructuración de productos y paquetes conectando la promesa de valor con costos, precio, alcance y capacidad de ejecución.", tags: ["Pricing", "Propuesta de valor", "Implementación"] },
];

const articles = [
  { category: "Producto", title: "Una buena idea todavía no es una propuesta de valor", excerpt: "Qué conexiones hacen falta para convertir una intuición en una solución relevante, viable y comprensible." },
  { category: "Aprendizaje", title: "Diseñar capacitación desde el desafío, no desde el contenido", excerpt: "Una mirada a los programas que empiezan por lo que una organización necesita hacer diferente." },
  { category: "Pricing", title: "El precio también cuenta una historia sobre el valor", excerpt: "Cómo conectar promesa, alcance, costos y percepción para tomar mejores decisiones de pricing." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Lorena del Busto, inicio"><span>L</span><b>Lorena del Busto</b></a>
        <div className="navlinks"><a href="#enfoque">Enfoque</a><a href="#consultoria">Consultoría</a><a href="#proyectos">Proyectos</a><a href="#ideas">Ideas</a></div>
        <a className="navcta" href="#contacto">Conversemos <span>↗</span></a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Estrategia · diseño · implementación</p>
          <h1>Integrar<br />para <em>Crear.</em></h1>
          <p className="hero-lead">Conecto estrategia, creatividad y conocimiento para transformar necesidades complejas en productos, experiencias y soluciones con impacto.</p>
          <div className="hero-actions"><a className="button primary" href="#consultoria">Explorar consultoría <span>↗</span></a><a className="text-link" href="#enfoque">Descubre mi enfoque <span>↓</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="coral-disc" /><div className="blue-disc" />
          <div className="art-word word-a">estrategia</div><div className="art-word word-b">creatividad</div><div className="art-word word-c">personas</div><div className="art-center">crear</div>
        </div>
        <div className="hero-index"><span>01</span><i /><p>Ordenar la complejidad.<br />Encontrar conexiones.<br />Crear algo que funciona.</p></div>
      </section>

      <section className="manifesto section" id="enfoque">
        <div className="section-tag">01 — Mi enfoque</div>
        <div className="manifesto-main"><p className="kicker">Una forma de mirar</p><h2>Las mejores soluciones no nacen de una sola disciplina.</h2></div>
        <div className="manifesto-copy"><p>Me interesa comprender qué hay detrás de cada desafío. Conecto las necesidades de las personas, los objetivos del negocio y las posibilidades de la solución para diseñar propuestas que puedan llevarse a la práctica.</p><p>Mi fortaleza no está solo en conocer distintas áreas, sino en <strong>encontrar relaciones entre ellas</strong>: hacer visible lo que antes estaba fragmentado y convertirlo en una solución coherente, relevante y realizable.</p></div>
        <div className="connections" aria-label="Conexiones que integro"><div>Estrategia <span>×</span> Creatividad</div><div>Negocio <span>×</span> Personas</div><div>Diseño <span>×</span> Ejecución</div><div>Tecnología <span>×</span> Propósito</div></div>
      </section>

      <section className="expertise section" id="expertise">
        <div className="section-tag light">02 — Disciplinas que integro</div>
        <div className="section-heading inverse"><p className="kicker">Un sistema conectado</p><h2>Distintas perspectivas.<br /><em>Una sola solución.</em></h2><p>Cada disciplina aporta una lente. El valor aparece cuando trabajan juntas.</p></div>
        <div className="expertise-grid">{expertise.map((item) => <article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><i>↗</i></article>)}</div>
      </section>

      <section className="consulting section" id="consultoria">
        <div className="section-tag">03 — Consultoría</div>
        <div className="consulting-intro">
          <div><p className="kicker">Pensar juntas para avanzar</p><h2>Claridad estratégica para convertir un desafío en un plan posible.</h2></div>
          <div className="consulting-lead"><p>Acompaño a empresas, instituciones y equipos que necesitan ordenar una situación compleja, tomar decisiones con criterio y diseñar una solución que pueda implementarse.</p><a className="button primary" href="#contacto">Cuéntame tu desafío <span>↗</span></a></div>
        </div>
        <div className="service-grid">
          <article><span>01</span><p className="service-time">Sesión estratégica</p><h3>Una decisión que necesita claridad</h3><p>Una conversación de trabajo enfocada en comprender el reto, contrastar perspectivas y definir próximos pasos concretos.</p><ul><li>Diagnóstico inicial</li><li>Mapa de opciones</li><li>Recomendaciones accionables</li></ul></article>
          <article className="featured-service"><span>02</span><p className="service-time">Consultoría por proyecto</p><h3>Del desafío a una solución estructurada</h3><p>Un proceso acotado para investigar, definir y diseñar una propuesta lista para validar o implementar.</p><ul><li>Producto o experiencia</li><li>Programa de aprendizaje</li><li>Pricing y propuesta de valor</li></ul></article>
          <article><span>03</span><p className="service-time">Acompañamiento</p><h3>Criterio durante la implementación</h3><p>Seguimiento estratégico para equipos que están construyendo, probando o evolucionando una iniciativa.</p><ul><li>Sesiones periódicas</li><li>Priorización y decisiones</li><li>Aprendizaje y evolución</li></ul></article>
        </div>
      </section>

      <section className="method section" id="metodo">
        <div className="section-tag">04 — Mi manera de trabajar</div>
        <div className="section-heading"><p className="kicker">De la pregunta al impacto</p><h2>Un proceso para<br /><em>hacer que ocurra.</em></h2><p>Una secuencia flexible para comprender antes de decidir, crear con criterio y aprender de la implementación.</p></div>
        <ol className="timeline">{steps.map((step, i) => <li key={step}><span>0{i + 1}</span><div>{step}</div><p>{["Investigar el contexto, las personas y el verdadero desafío.","Relacionar perspectivas que inicialmente parecen separadas.","Ordenar la complejidad y establecer prioridades claras.","Diseñar la propuesta, experiencia, producto o programa.","Traducir el diseño en decisiones y acciones concretas.","Evaluar resultados, aprender y mejorar la solución."][i]}</p></li>)}</ol>
      </section>

      <section className="projects section" id="proyectos">
        <div className="section-tag">05 — Proyectos seleccionados</div>
        <div className="section-heading"><p className="kicker">El enfoque en acción</p><h2>Conectar ideas.<br /><em>Construir evidencia.</em></h2></div>
        <div className="case-list">{cases.map((c, i) => <article className="case" key={c.title}><div className={`case-visual visual-${i + 1}`}><span>0{i + 1}</span><div className="case-shape"><i /><b /></div></div><div className="case-copy"><p className="case-type">{c.type}</p><h3>{c.title}</h3><p>{c.text}</p><div className="tags">{c.tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contacto">Conocer el proyecto <span>↗</span></a></div></article>)}</div>
      </section>

      <section className="ideas section" id="ideas">
        <div className="section-tag">06 — Ideas</div>
        <div className="ideas-header"><div><p className="kicker">Pensar también es crear</p><h2>Ideas para conectar<br /><em>y llevar a la práctica.</em></h2></div><p>Un espacio para compartir preguntas, herramientas y aprendizajes sobre producto, aprendizaje, pricing, innovación y todo lo que ocurre entre estas disciplinas.</p></div>
        <div className="articles-grid">{articles.map((article, index) => <article key={article.title}><div className="article-meta"><span>{article.category}</span><span>En preparación</span></div><div className={`article-mark mark-${index + 1}`} aria-hidden="true"><i /><b /></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="article-soon">Próximamente</span></article>)}</div>
        <div className="ideas-note"><span>Cuaderno abierto</span><p>Esta sección crecerá con artículos originales de Lorena. Cada publicación partirá de experiencias, preguntas y decisiones reales.</p></div>
      </section>

      <section className="about section" id="sobre-mi">
        <div className="about-portrait" aria-label="Espacio para retrato de Lorena"><div className="portrait-initial">L</div><span>Estratégica</span><span>Creativa</span><span>Curiosa</span></div>
        <div className="about-copy"><div className="section-tag light">07 — Sobre mí</div><p className="kicker">Lorena del Busto</p><h2>Una mirada estructurada.<br /><em>Una sensibilidad creativa.</em></h2><p>He trabajado en espacios donde confluyen producto, aprendizaje, marketing, pricing, operaciones, innovación y personas. Esa experiencia me enseñó a observar los desafíos desde distintos ángulos y a reconocer las conexiones que hacen posible una mejor solución.</p><p>Mi vínculo con el canto y la expresión artística complementa esa mirada: me recuerda que crear también implica escuchar, interpretar y dar forma a algo que antes no existía.</p><a className="text-link light-link" href="#contacto">Conversemos sobre una colaboración <span>↗</span></a></div>
      </section>

      <section className="contact section" id="contacto">
        <div className="contact-intro"><p className="kicker">¿Creamos algo juntos?</p><h2>Conversemos sobre<br /><em>lo que quieres hacer posible.</em></h2><p>Si tienes un desafío, una decisión por ordenar o una idea que necesita tomar forma, cuéntame un poco sobre el contexto.</p><a href="mailto:hola@lorenadelbusto.com">hola@lorenadelbusto.com <span>↗</span></a></div>
        <ContactForm />
      </section>

      <footer><a className="brand" href="#inicio"><span>L</span><b>Lorena del Busto</b></a><p>Integrar para Crear.</p><div><a href="#ideas">Ideas</a><a href="#consultoria">Consultoría</a><a href="#inicio">Volver arriba ↑</a></div><small>© 2026 Lorena del Busto</small></footer>
      <ChatAssistant />
    </main>
  );
}
