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
      <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-blue-500 font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors">
            JA
          </a>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-medium text-slate-400">
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-blue-400 transition-colors">Habilidades</a>
            <a href="#experiencia" className="hover:text-blue-400 transition-colors">Experiencia</a>
            <a href="#educacion" className="hover:text-blue-400 transition-colors">Educación</a>
            <a href="#contacto" className="text-blue-500 hover:text-blue-400 transition-colors font-bold">Contacto</a>
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
            <div className="absolute bottom-4 right-4 bg-blue-600 px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg group-hover:bg-blue-500 transition-colors">
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
          <h2 className="text-3xl font-bold mb-10 border-b border-slate-800 pb-4 text-blue-400">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {habilidades.map((hab, i) => (
              <div key={i} className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-xs">{hab.categoria}</h3>
                <div className="flex flex-wrap gap-2">
                  {hab.items.map((item, idx) => (
                    <span key={idx} className="text-slate-300 bg-slate-900 px-3 py-1 rounded-md text-sm border border-slate-700">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="pt-10">
          <h2 className="text-3xl font-bold mb-10 border-b border-slate-800 pb-4 text-blue-400">Experiencia Laboral</h2>
          <div className="space-y-8">
            {experiencia.map((exp, i) => (
              <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{exp.puesto}</h3>
                    <p className="text-blue-500 font-medium">{exp.lugar}</p>
                  </div>
                  <span className="text-slate-400 font-mono text-sm mt-2 md:mt-0">{exp.periodo}</span>
                </div>
                <ul className="list-disc list-inside space-y-3 text-slate-400">
                  {exp.puntos.map((p, idx) => <li key={idx} className="leading-relaxed">{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCACIÓN */}
        <section id="educacion" className="pt-10">
          <h2 className="text-3xl font-bold mb-10 border-b border-slate-800 pb-4 text-blue-400">Educación</h2>
          {educacion.map((edu, i) => (
            <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">{edu.titulo}</h3>
                <p className="text-blue-500 font-medium mt-1">{edu.institucion}</p>
                <p className="text-slate-400 mt-4 leading-relaxed max-w-2xl">{edu.detalles}</p>
              </div>
              <span className="bg-slate-900 text-slate-400 px-4 py-1 rounded-full text-sm font-mono border border-slate-700">{edu.periodo}</span>
            </div>
          ))}
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