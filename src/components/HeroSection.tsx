'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Mail, Code2, Download, ArrowDownCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// Partículas animadas simples
function Particles() {
  const [particles, setParticles] = useState<
    { width: number; height: number; top: number; left: number; duration: number; delay: number; y: number }[]
  >([])

  useEffect(() => {
    const arr = Array.from({ length: 25 }).map(() => ({
      width: Math.random() * 32 + 16,
      height: Math.random() * 32 + 16,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 2,
      y: Math.random() * 40 - 20,
    }))
    setParticles(arr)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 blur-lg"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
          animate={{
            y: [0, p.y, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <motion.section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fondo animado con gradientes y grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f172a] to-black opacity-80" />
      <Particles />

      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/30 via-secondary/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none z-0" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Avatar con halo animado */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 relative"
        >
          {/* Halo animado mejorado */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7],
              filter: [
                'blur(32px) brightness(1.1)',
                'blur(40px) brightness(1.2)',
                'blur(32px) brightness(1.1)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            <div
              className="w-[200px] h-[200px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #6366F1 0%, #EC4899 40%, #06b6d4 70%, #6366F1 100%)',
                opacity: 0.55,
                filter: 'blur(32px)',
              }}
            />
          </motion.div>
          <Image
            src="/I.jpg"
            alt="Avatar de Fredy"
            width={160}
            height={160}
            className="relative rounded-full border-4 border-primary shadow-2xl z-10"
            priority
          />
        </motion.div>

        {/* Título principal con animación de gradiente */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-400 to-secondary animate-gradient-x"
        >
          Hola, soy <span className="text-white drop-shadow-glow">Fredy</span>
        </motion.h1>

        {/* Animación de texto */}
        <div className="text-2xl md:text-3xl font-medium mb-6 h-16">
          <TypeAnimation
            sequence={[
              'Desarrollador FullStack ⚡',
              2000,
              'Especialista en Next.js 🚀',
              2000,
              'Experto en Go y Rust 🦀',
              2000,
              'Apasionado por la tecnología 💡',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="inline-block"
          />
        </div>

        {/* Descripción glassmorphism */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-gray-200 max-w-2xl mb-8 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg"
        >
          Construyo experiencias web modernas con tecnologías de alto rendimiento como <span className="text-primary font-semibold">TypeScript</span>, <span className="text-cyan-400 font-semibold">Go</span>, <span className="text-orange-400 font-semibold">Rust</span> y <span className="text-pink-400 font-semibold">Next.js 14</span>. Mi enfoque combina diseño, rendimiento y escalabilidad.
        </motion.p>

        {/* Botones CTA animados */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: '0 4px 32px #6366F1' }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition-all duration-200"
          >
            <Mail size={20} /> Contáctame
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, boxShadow: '0 4px 32px #EC4899' }}
            whileTap={{ scale: 0.97 }}
            href="#skills"
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold shadow-lg hover:bg-blue-500/10 transition-all duration-200"
          >
            <Code2 size={20} /> Ver Habilidades
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08, boxShadow: '0 4px 32px #EC4899' }}
            whileTap={{ scale: 0.97 }}
            href="/fredy-cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white rounded-lg font-semibold shadow-lg hover:opacity-80 transition-all duration-200"
          >
            <Download size={20} /> Descargar CV
          </motion.a>
        </div>

        {/* Iconos de habilidades con animación */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-gray-400 text-4xl mb-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            { icon: 'devicon-nextjs-original-wordmark', color: 'hover:text-white', title: 'Next.js' },
            { icon: 'devicon-typescript-plain', color: 'hover:text-blue-400', title: 'TypeScript' },
            { icon: 'devicon-go-original-wordmark', color: 'hover:text-cyan-400', title: 'Go' },
            { icon: 'devicon-rust-plain', color: 'hover:text-orange-500', title: 'Rust' },
            { icon: 'devicon-tailwindcss-plain', color: 'hover:text-teal-300', title: 'Tailwind CSS' },
            { icon: 'devicon-react-original-wordmark', color: 'hover:text-sky-400', title: 'React' },
            { icon: 'devicon-php-plain', color: 'hover:text-indigo-400', title: 'PHP' },
            { icon: 'devicon-python-plain', color: 'hover:text-yellow-400', title: 'Python' },
            { icon: 'devicon-xampp-plain', color: 'hover:text-orange-400', title: 'XAMPP' },
          ].map((item, idx) => (
            <motion.i
              key={item.icon}
              className={`${item.icon} ${item.color} transition drop-shadow-glow`}
              title={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.2, rotate: -8 + idx * 3 }}
            />
          ))}
        </motion.div>

        {/* Scroll abajo animado */}
        <motion.div 
          className="mt-10"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownCircle className="w-10 h-10 text-primary drop-shadow-glow animate-bounce-slow" />
        </motion.div>
      </div>
    </motion.section>
  )
}
