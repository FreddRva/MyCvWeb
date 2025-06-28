import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import { BsWhatsapp } from 'react-icons/bs'

export const metadata: Metadata = {
  title: 'CV Next-Gen | Fredy',
  description: 'CV moderno creado con la stack más potente de 2025',
  keywords: 'desarrollador, fullstack, nextjs, go, rust, cv moderno',
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-dark to-gray-900 text-white">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/921027790?text=Hola,%20vi%20tu%20portafolio%20y%20quiero%20trabajar%20contigo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-lg transition-all duration-300"
        aria-label="WhatsApp"
      >
        <BsWhatsapp className="w-6 h-6" />
      </a>
    </>
  )
}
