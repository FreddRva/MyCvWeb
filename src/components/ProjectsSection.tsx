'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiNextdotjs, SiGo, SiRust, SiPostgresql, SiDocker, SiPhp, SiPython, SiMysql } from 'react-icons/si'

const projects = [
  {
    title: "Plataforma E-commerce Next-Gen",
    description: `E-commerce 3D con Next.js, Go y PostgreSQL. Renderizado 3D (Three.js), pagos con Stripe, autenticación Passkeys (WebAuthn), mapas (Google Maps), emails (Resend) y almacenamiento en AWS S3. Frontend moderno, backend robusto y servicios cloud integrados para alta escalabilidad y seguridad.`,
    technologies: [
      { name: "Next.js 14", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "Go", icon: <SiGo className="w-5 h-5" /> },
      { name: "WebGPU", icon: <span className="text-xs font-bold">GPU</span> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> }
    ],
    github: "#",
    demo: "https://importfredd-axiora.vercel.app/",
    image: "/Ecommerce.png"
  },
  {
    title: "Sistema de Analytics en Tiempo Real",
    description: "Procesamiento de streams con Rust + Apache Kafka. Dashboard con WebAssembly para visualización de datos masivos con sub-100ms latency.",
    technologies: [
      { name: "Rust", icon: <SiRust className="w-5 h-5" /> },
      { name: "Kafka", icon: <span className="text-xs font-bold">KF</span> },
      { name: "WASM", icon: <span className="text-xs font-bold">WM</span> },
      { name: "Docker", icon: <SiDocker className="w-5 h-5" /> }
    ],
    github: "#",
    demo: "#",
    image: "/Pronto.png"
  },
  {
    title: "Aplicación Serverless Global",
    description: "Desplegado en Cloudflare Workers + D1 SQLite. Tiempos de respuesta <50ms globalmente gracias a compute@edge con autoscaling automático.",
    technologies: [
      { name: "Cloudflare", icon: <span className="text-xs font-bold">CF</span> },
      { name: "TypeScript", icon: <span className="text-xs font-bold">TS</span> },
      { name: "gRPC", icon: <span className="text-xs font-bold">gR</span> },
      { name: "D1", icon: <span className="text-xs font-bold">D1</span> }
    ],
    github: "#",
    demo: "#",
    image: "/Pronto.png"
  },
  {
    title: "Gestor de Reservas para Restaurantes",
    description: "Sistema web para reservas y gestión de mesas, desarrollado en PHP con XAMPP y MySQL. Panel de administración seguro y notificaciones por correo.",
    technologies: [
      { name: "PHP", icon: <SiPhp className="w-5 h-5" /> },
      { name: "XAMPP", icon: <span className="text-xs font-bold">XAMPP</span> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> }
    ],
    github: "#",
    demo: "#",
    image: "/restaurante.png"
  },
  {
    title: "API de Predicción de Datos con IA",
    description: "API RESTful en Python para predicción de tendencias usando scikit-learn y FastAPI. Despliegue en Docker y documentación OpenAPI.",
    technologies: [
      { name: "Python", icon: <SiPython className="w-5 h-5" /> },
      { name: "FastAPI", icon: <span className="text-xs font-bold">FA</span> },
      { name: "scikit-learn", icon: <span className="text-xs font-bold">SK</span> },
      { name: "Docker", icon: <SiDocker className="w-5 h-5" /> }
    ],
    github: "#",
    demo: "#",
    image: "/Pronto.png"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/90 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/20 to-transparent blur-2xl opacity-30"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-pink-400 to-secondary bg-clip-text text-transparent drop-shadow-glow animate-gradient-x">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Implementaciones reales usando la stack más moderna de 2025
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl overflow-hidden flex flex-col hover:border-secondary/60 transition-all duration-300">
                <div className="h-48 relative flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative z-10 text-5xl font-extrabold text-white/30 group-hover:text-white/60 transition">
                    {index + 1}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-glow">{project.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold mb-2 text-primary/80">TECNOLOGÍAS USADAS</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-800/70 border border-primary/10 rounded-lg text-sm text-white/90 shadow hover:scale-105 hover:bg-primary/10 transition"
                        >
                          <span className="text-primary">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-auto pt-4 border-t border-primary/10">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <FiGithub /> Código
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center gap-2 text-gray-400 hover:text-secondary transition"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 mb-6">
            ¿Quieres ver más proyectos o el código fuente de este CV?
          </p>
          <a 
            href="https://github.com/tuusuario" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition"
          >
            <FiGithub className="mr-2" /> Mi GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}