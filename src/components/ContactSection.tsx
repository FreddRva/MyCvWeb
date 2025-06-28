'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) {
        setForm({ name: '', email: '', message: '' })
        setSuccess(true)
      } else {
        alert('Ocurrió un error al enviar el mensaje.')
      }
    } catch (err) {
      alert('Error inesperado.')
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl text-gray-400">
            Especializado en construir aplicaciones modernas, rápidas y escalables con la mejor stack de 2025.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contáctame</h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-primary/20 shadow-2xl"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-primary">Nombre</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 text-white placeholder:text-gray-400 transition"
                  placeholder="Tu nombre"
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-primary">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 text-white placeholder:text-gray-400 transition"
                  placeholder="tu@email.com"
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-primary">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/60 text-white placeholder:text-gray-400 transition resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px #6366F1' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-white shadow-lg transition-all text-lg tracking-wide"
                disabled={loading}
              >
                {loading ? 'Enviando...' : '🚀 Enviar Mensaje'}
              </motion.button>

              {success && (
                <p className="text-green-400 text-sm mt-2 text-center">✅ ¡Tu mensaje fue enviado con éxito!</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Más información</h3>

              <div className="space-y-4">
                <p className="flex items-start gap-4">
                  <span className="text-primary mt-1"><FiMail className="w-5 h-5" /></span>
                  <span>
                    <strong>Email:</strong> rvethan70@gmail.com<br />
                    Respuesta en menos de 24h
                  </span>
                </p>

                <p className="flex items-start gap-4">
                  <span className="text-primary mt-1"><FiLinkedin className="w-5 h-5" /></span>
                  <span>
                    <strong>LinkedIn:</strong> www.linkedin.com/in/fredy-ruiz-valencia-859102331<br />
                    Conectemos profesionalmente
                  </span>
                </p>

                <p className="flex items-start gap-4">
                  <span className="text-primary mt-1"><FiGithub className="w-5 h-5" /></span>
                  <span>
                    <strong>GitHub:</strong>#<br />
                    Mira mis proyectos open-source
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">También puedes encontrarme en:</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition">
                  <SiLeetcode className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
