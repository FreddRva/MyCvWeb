'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Desarrollador FullStack Senior",
    company: "Tech Innovators Corp",
    period: "2023 - Presente",
    description: "Lideré la migración a Next.js 14 con Server Actions, reduciendo el TTI en un 40%. Implementé microservicios en Go con gRPC para el procesamiento de pagos.",
    stack: ["Next.js", "Go", "gRPC", "Kubernetes"]
  },
  {
    title: "Arquitecto de Software",
    company: "Digital Solutions SA",
    period: "2021 - 2023",
    description: "Diseñé una arquitectura basada en eventos con Rust + NATS.js. Optimicé consultas SQL logrando 300ms → 25ms en percentil 99.",
    stack: ["Rust", "PostgreSQL", "NATS", "GraphQL"]
  },
  {
    title: "Desarrollador Frontend",
    company: "Web Creators LLC",
    period: "2019 - 2021",
    description: "Implementé un sistema de diseño con TailwindCSS + Storybook, acelerando el desarrollo de features en un 60%.",
    stack: ["React", "TypeScript", "TailwindCSS", "Storybook"]
  },
  {
    title: "Desarrollador Backend PHP",
    company: "Soluciones Web MX",
    period: "2017 - 2019",
    description: "Desarrollé APIs REST y sistemas de reservas usando PHP, XAMPP y MySQL. Automatización de reportes y migración de datos legacy.",
    stack: ["PHP", "XAMPP", "MySQL", "REST"]
  },
  {
    title: "Ingeniero de Datos Python",
    company: "Data Insights Group",
    period: "2015 - 2017",
    description: "Construí pipelines de ETL y modelos de predicción con Python y scikit-learn. Integración de FastAPI para exponer modelos como microservicios.",
    stack: ["Python", "FastAPI", "scikit-learn", "ETL"]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/90 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/20 to-transparent blur-2xl opacity-30"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-primary via-pink-400 to-secondary bg-clip-text text-transparent drop-shadow-glow animate-gradient-x">
            Experiencia Profesional
          </h2>
          
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 pointer-events-none hidden md:block" />
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className={`relative md:pl-24 pl-12 group`}
                >
                  {/* Punto animado en la línea */}
                  <motion.div
                    className="absolute left-2 md:left-8 top-6 w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-lg flex items-center justify-center border-4 border-gray-900 z-10"
                    animate={{ scale: [1, 1.2, 1], boxShadow: [
                      '0 0 0px 0px #6366F1',
                      '0 0 24px 8px #EC4899',
                      '0 0 0px 0px #6366F1',
                    ] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: 'mirror' }}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </motion.div>
                  
                  {/* Card de experiencia */}
                  <motion.div
                    whileHover={{ scale: 1.025, boxShadow: '0 8px 40px #6366F133' }}
                    className={`bg-gray-800/60 backdrop-blur-xl p-8 rounded-2xl border border-primary/30 shadow-xl transition-all duration-300
                      ${index % 2 === 0 ? 'ml-8 md:ml-12' : 'md:mr-12'}
                      group-hover:border-secondary/60`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white drop-shadow-glow">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-3">{exp.company} • {exp.period}</p>
                    <p className="text-gray-200 mb-5">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border border-primary/30 rounded-full text-xs font-semibold shadow hover:scale-105 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}