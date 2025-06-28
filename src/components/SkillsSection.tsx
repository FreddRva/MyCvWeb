'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiGraphql, SiGo, SiRust, SiKubernetes, SiApachekafka, SiPhp, SiPython, SiMysql } from 'react-icons/si'
import { TbBrandVercel, TbBrandCloudflare } from 'react-icons/tb'

const skills = [
  { 
    category: "Frontend", 
    items: [
      { name: 'Next.js 14', icon: <SiNextdotjs className="w-6 h-6" />, level: 95 },
      { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" />, level: 90 },
      { name: 'React 18', icon: <FaReact className="w-6 h-6" />, level: 90 },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="w-6 h-6" />, level: 85 },
      { name: 'WebGPU', icon: <span className="text-sm font-bold">GPU</span>, level: 70 },
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: 'Go (Golang)', icon: <SiGo className="w-6 h-6" />, level: 85 },
      { name: 'Rust', icon: <SiRust className="w-6 h-6" />, level: 75 },
      { name: 'gRPC', icon: <span className="text-sm font-bold">gRPC</span>, level: 80 },
      { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6" />, level: 75 },
      { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" />, level: 80 },
      { name: 'PHP', icon: <SiPhp className="w-6 h-6" />, level: 75 },
      { name: 'Python', icon: <SiPython className="w-6 h-6" />, level: 80 },
    ] 
  },
  { 
    category: "Infra & DB", 
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" />, level: 85 },
      { name: 'MySQL', icon: <SiMysql className="w-6 h-6" />, level: 80 },
      { name: 'Docker', icon: <FaDocker className="w-6 h-6" />, level: 80 },
      { name: 'Kubernetes', icon: <SiKubernetes className="w-6 h-6" />, level: 70 },
      { name: 'NATS', icon: <span className="text-sm font-bold">NATS</span>, level: 65 },
      { name: 'Apache Kafka', icon: <SiApachekafka className="w-6 h-6" />, level: 60 },
    ] 
  },
  { 
    category: "Cloud", 
    items: [
      { name: 'Vercel', icon: <TbBrandVercel className="w-6 h-6" />, level: 85 },
      { name: 'Cloudflare', icon: <TbBrandCloudflare className="w-6 h-6" />, level: 75 },
      { name: 'Supabase', icon: <span className="text-sm font-bold">SB</span>, level: 70 },
      { name: 'Neon.tech', icon: <span className="text-sm font-bold">N</span>, level: 65 },
      { name: 'Cloud Run', icon: <span className="text-sm font-bold">CR</span>, level: 60 },
    ] 
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/90 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/20 to-transparent blur-2xl opacity-30"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-pink-400 to-secondary bg-clip-text text-transparent drop-shadow-glow animate-gradient-x">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dominio completo de la stack más potente y demandada en 2025
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-7 rounded-2xl border border-primary/20 shadow-xl hover:border-secondary/60 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary drop-shadow-glow">{category.category}</h3>
              
              <div className="space-y-5">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full shadow"
                      style={{ maxWidth: '100%' }}
                    />
                    <div className="w-full bg-gray-800/60 rounded-full h-2 -mt-2"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
