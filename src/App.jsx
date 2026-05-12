import { useState } from 'react'
import './index.css'

// IMPORTACIÓN DE IMÁGENES
import fotoPerfil from './assets/perfil.jpg'
import imgMonopatines from './assets/monopatin.jpg'
import imgAldesal from './assets/aldesal.jpg'
import imgPortafolio from './assets/portafolio.jpg'

function App() {
  // Estado para controlar qué proyecto muestra la imagen
  const [proyectoRevelado, setProyectoRevelado] = useState(null);

  const proyectos = [
    {
      titulo: "Micromovilidad Pro",
      subtitulo: "Arquitectura de Microservicios",
      descripcion: "Desarrollo de un sistema escalable para la gestión de flotas de monopatines basado en microservicios independientes.",
      logro: "Implementación de infraestructura desacoplada bajo estándares de Arquitecturas Web (Java, API REST).",
      tags: ["Java", "Spring Boot", "Microservicios", "Docker"],
      imagen: imgMonopatines
    },
    {
      titulo: "Aldesal-Games",
      subtitulo: "Plataforma de Juegos Estilo Flash",
      descripcion: "Ecosistema de juegos web con sistema de gestión de usuarios para persistencia de estadísticas.",
      logro: "Desarrollo de lógica estratégica para 'Star Clash: Battlefront'.",
      tags: ["JavaScript", "HTML5", "CSS3", "UX/UI"],
      imagen: imgAldesal
    },
    {
      titulo: "Portafolio Profesional",
      subtitulo: "SPA de Alto Impacto",
      descripcion: "Diseño y desarrollo de mi carta de presentación digital enfocada en la estética y velocidad.",
      logro: "Navegación fluida y diseño responsivo utilizando React y Tailwind CSS.",
      tags: ["React", "Tailwind", "Vite", "Responsive"],
      imagen: imgPortafolio
    }
  ];

  const habilidades = [
    { categoria: "Desarrollo", items: ["Java", "React", "PHP", "Angular", "SQL", "JavaScript", "HTML/CSS"] },
    { categoria: "Conceptos Técnicos", items: ["Microservicios", "CSR/SSR", "Git/GitHub", "Docker", "API-Rest", "POO"] }
  ];

  const experiencia = [
    {
      puesto: "Atención al Cliente y Ventas",
      lugar: "Ayacucho, Buenos Aires",
      periodo: "2020 - 2022",
      puntos: [
        "Desarrollo de habilidades de comunicación y resolución de problemas.",
        "Gestión de responsabilidades múltiples y trabajo bajo presión.",
        "Trabajo efectivo en equipo para alcanzar objetivos."
      ]
    }
  ];

  const educacion = [
    {
      institucion: "UNICEN (Universidad Nacional del Centro de la Pcia. de Bs. As.)",
      titulo: "Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (TUDAI)",
      periodo: "2023 - Actualidad",
      detalles: "Formación integral con foco en algoritmos, estructuras de datos y arquitecturas modernas."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500/30">
      
      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 nav-glow">
  <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="#" className="text-blue-500 font-bold text-2xl tracking-tighter nav-logo-glow transition-all">
      JA
    </a>
    {/* Agregamos items-center para que todos los links se alineen al medio verticalmente */}
    <div className="flex items-center gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
      <a href="#proyectos" className="hover:text-blue-400 hover:scale-105 transition-all">Proyectos</a>
      <a href="#habilidades" className="hover:text-blue-400 hover:scale-105 transition-all">Habilidades</a>
      <a href="#trayectoria" className="hover:text-blue-400 hover:scale-105 transition-all">Trayectoria</a>
      
      <a 
        href="#contacto" 
        className="text-blue-500 border border-blue-500/30 px-4 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center"
      >
        Contacto
      </a>
    </div>
  </div>
</nav>

      {/* HERO SECTION */}
      <header className="max-w-4xl mx-auto text-center py-32 px-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-6 shadow-2xl shadow-blue-500/20">
          <img src={fotoPerfil} alt="Juan Altamiranda" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
          Juan <span className="text-blue-500">Altamiranda</span>
        </h1>
        <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-8">
          Fullstack Developer
        </p>
        <p className="text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed text-center">
          Soy una persona honesta y responsable, con un fuerte compromiso para cumplir objetivos. 
          Mi curiosidad me impulsa a buscar constantemente nuevos conocimientos.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/juan-altamiranda-b93859296/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 text-white no-underline flex items-center gap-2"
          >
            LinkedIn
          </a>
          
          <a 
            href="https://wa.me/542494641010" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 text-white no-underline flex items-center gap-2"
          >
            WhatsApp
          </a>
          
          <a 
            href="mailto:juanaltamiranda2003@hotmail.com" 
            className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-2xl font-bold border border-slate-700 transition-all hover:-translate-y-1 hover:border-slate-500 text-white no-underline flex items-center gap-2"
          >
            Email
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 pb-20">
        
{/* PROYECTOS */}
<section id="proyectos" className="pt-10">
  <h2 className="text-3xl font-bold mb-10 border-b border-slate-800 pb-4 text-blue-400">Proyectos Destacados</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {proyectos.map((p, i) => (
    <div 
      key={i} 
      onClick={() => setProyectoRevelado(proyectoRevelado === i ? null : i)}
      className="card-container perspective-1000 cursor-pointer h-[420px] group"
    >
      <div 
        className={`card-inner transition-all duration-700 ${proyectoRevelado === i ? 'rotate-y-180' : ''}`}
      >
        
        {/* LADO A: TEXTO (FRENTE) */}
        <div className="card-face absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 p-8 flex flex-col shadow-xl z-20 group-hover:border-blue-500/50 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-2">{p.titulo}</h3>
          <p className="text-blue-500 text-sm font-semibold mb-3">{p.subtitulo}</p>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">{p.descripcion}</p>
          <p className="text-slate-400 text-xs mb-6 italic border-l-2 border-blue-500 pl-4">{p.logro}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto mb-8">
            {p.tags.map((tag, idx) => (
              <span key={idx} className="bg-slate-900 text-blue-400 text-[9px] uppercase font-bold px-2 py-1 rounded border border-blue-500/20 group-hover:border-blue-500/50 transition-all">
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 text-slate-500 group-hover:text-blue-400 group-hover:scale-110 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* LADO B: IMAGEN (DORSO) */}
        <div className="card-face card-face-back absolute inset-0 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center z-10 group-hover:border-blue-500/50 transition-colors">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <img 
              src={p.imagen} 
              alt={p.titulo} 
              className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            />
      <div className="absolute bottom-4 right-4 bg-blue-600 px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg hover:bg-blue-400 hover:scale-110 transition-all duration-300">
  Volver
</div>
          </div>
        </div>
        
      </div>
    </div>
   ))}
  </div>
</section>

  {/* HABILIDADES */}
<section id="habilidades" className="pt-10">
  <div className="flex items-center gap-4 mb-10">
    <h2 className="text-3xl font-bold border-b border-slate-800 pb-4 text-blue-400">Habilidades Técnicas</h2>
    <div className="h-[1px] flex-1 bg-slate-800 mt-2"></div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {habilidades.map((hab, i) => (
      <div key={i} className="skill-card bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm group">
        <div className="flex items-center gap-3 mb-6">
          {/* Icono dinámico según categoría */}
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
            {hab.categoria === "Desarrollo" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            )}
          </div>
          <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm">{hab.categoria}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {hab.items.map((item, idx) => (
            <span 
              key={idx} 
              className="skill-tag text-slate-300 bg-slate-900/80 px-4 py-2 rounded-xl text-sm border border-slate-700 font-medium cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* Decoración de fondo */}
        <div className="absolute -bottom-2 -right-2 text-blue-500/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
          <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* SECCIÓN UNIFICADA: TRAYECTORIA */}
<section id="trayectoria" className="pt-10">
  <h2 className="text-3xl font-bold mb-16 border-b border-slate-800 pb-4 text-blue-400">Educación y Experiencia</h2>
  
  <div className="timeline-container space-y-12">
    
    {/* EDUCACIÓN (UNICEN) */}
    {educacion.map((edu, i) => (
      <div key={i} className="timeline-item relative pl-8 md:pl-0 md:flex md:justify-between md:items-center group">
        <div className="hidden md:block w-5/12 text-right pr-8 text-slate-500 font-mono text-sm">
          {edu.periodo}
        </div>
        
        {/* El punto brillante */}
        <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-0 w-3 h-3 bg-blue-500 rounded-full timeline-dot z-10 group-hover:scale-150 transition-transform"></div>
        
        <div className="md:w-5/12 bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm group-hover:border-blue-500/50 transition-all">
          <span className="md:hidden block text-blue-500 font-mono text-xs mb-2">{edu.periodo}</span>
          <h3 className="text-xl font-bold text-white">{edu.titulo}</h3>
          <p className="text-blue-500 font-medium text-sm mt-1">{edu.institucion}</p>
          <p className="text-slate-400 mt-4 text-sm leading-relaxed">{edu.detalles}</p>
        </div>
      </div>
    ))}

    {/* EXPERIENCIA (Ventas) */}
    {experiencia.map((exp, i) => (
      <div key={i} className="timeline-item relative pl-8 md:pl-0 md:flex md:justify-between md:items-center flex-row-reverse group">
        <div className="hidden md:block w-5/12 text-left pl-8 text-slate-500 font-mono text-sm">
          {exp.periodo}
        </div>
        
        <div className="absolute left-[-5px] md:left-1/2 md:translate-x-[-50%] top-0 w-3 h-3 bg-blue-500 rounded-full timeline-dot z-10 group-hover:scale-150 transition-transform"></div>
        
        <div className="md:w-5/12 bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm group-hover:border-blue-500/50 transition-all">
          <span className="md:hidden block text-blue-500 font-mono text-xs mb-2">{exp.periodo}</span>
          <h3 className="text-xl font-bold text-white">{exp.puesto}</h3>
          <p className="text-blue-400 font-medium text-sm mt-1">{exp.lugar}</p>
          <ul className="mt-4 space-y-2">
            {exp.puntos.map((p, idx) => (
              <li key={idx} className="text-slate-400 text-xs flex items-start gap-2">
                <span className="text-blue-500 mt-1">▹</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}

  </div>
</section>

        {/* CONTACTO FINAL */}
        <section id="contacto" className="pt-20 border-t border-slate-800 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white text-center tracking-tight">
            ¿Tenés un desafío para mí?
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg text-center leading-relaxed">
            Estoy listo para dar mis primeros pasos profesionales. Me apasiona construir soluciones eficientes y seguir aprendiendo día a día.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://wa.me/542494641010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 px-12 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 text-white no-underline text-lg"
            >
              WhatsApp
            </a>
            
            <a 
              href="mailto:juanaltamiranda2003@hotmail.com" 
              className="bg-blue-600 hover:bg-blue-500 px-12 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 text-white no-underline text-lg"
            >
              Enviar Email
            </a>
          </div>
        </section>

      </main>

      <footer className="py-10 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>© 2026 Juan Altamiranda - Hecho con React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;