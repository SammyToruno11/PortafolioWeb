'use client'

import React, { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { FaWhatsapp } from "react-icons/fa"

export default function ContactForm() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceID = 'service_portafolio'
    const templateID = 'template_qem051g'
    const userID = 'GKw7f_ixd75BQw5LG'

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID)
      setIsSubmitting(false)
      setSuccessMessage(language === "es"
        ? "¡Gracias por tu mensaje! Te responderé pronto."
        : "Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
      setErrorMessage(language === "es"
        ? "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente."
        : "There was an error sending the form. Please try again.")
    }
  }

  const texts = {
    es: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      button: "Enviar",
      successMessage: "¡Gracias por tu mensaje! Te responderé pronto.",
      errorMessage: "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.",
      placeholders: {
        name: "Escribe tu nombre",
        email: "Escribe tu correo electrónico",
        message: "Escribe tu mensaje"
      }
    },
    en: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send",
      successMessage: "Thank you for your message! I'll get back to you soon.",
      errorMessage: "There was an error sending the form. Please try again.",
      placeholders: {
        name: "Enter your name",
        email: "Enter your email",
        message: "Enter your message"
      }
    }
  }

  const t = texts[language]

  return (
    <section
      id="contacto"
      className="flex justify-center bg-[#E7E3DD] py-16"
      style={{ fontFamily: 'var(--font-montserrat)', color: '#043353' }}
    >
      <motion.div
        className="max-w-xl w-full px-6"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2
          className="text-3xl font-semibold text-center mb-5"
          style={{
            fontFamily: 'var(--font-playfair)',
            color: '#043353',
            fontSize: '1.875rem',
          }}
        >
          {t.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-base font-semibold">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border rounded-lg border-[#BB2649] focus:outline-none focus:ring-2 focus:ring-[#BB2649] transition-all"
              placeholder={t.placeholders.name}
              required
              style={{
                backgroundColor: "#f5f5f5",
                color: "#043353",
                fontFamily: 'var(--font-montserrat)',
              }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-base font-semibold">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-2 border rounded-lg border-[#BB2649] focus:outline-none focus:ring-2 focus:ring-[#BB2649] transition-all"
              placeholder={t.placeholders.email}
              required
              style={{
                backgroundColor: "#f5f5f5",
                color: "#043353",
                fontFamily: 'var(--font-montserrat)',
              }}
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-base font-semibold">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="px-4 py-2 border rounded-lg border-[#BB2649] focus:outline-none focus:ring-2 focus:ring-[#BB2649] transition-all"
              placeholder={t.placeholders.message}
              rows="3"
              required
              style={{
                backgroundColor: "#f5f5f5",
                color: "#043353",
                fontFamily: 'var(--font-montserrat)',
              }}
            />
          </div>

          {/* Botón de Enviar con animación */}
          <motion.button
            type="submit"
            className="w-auto px-6 py-2 bg-[#BB2649] text-white font-semibold rounded-lg mx-auto block"
            disabled={isSubmitting}
            style={{ fontFamily: 'var(--font-montserrat)' }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {isSubmitting ? 'Enviando...' : t.button}
          </motion.button>
        </form>

        {/* Botón WhatsApp con animación */}
        <div className="mt-4 flex justify-center mb-6">
          <motion.a
            href="https://wa.me/84909877"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#043353] text-white rounded-lg"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp
          </motion.a>
        </div>

        {/* Mensajes */}
        {successMessage && (
          <p className="text-center text-lg font-semibold mt-4 text-green-600">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-center text-lg font-semibold mt-4 text-red-600">{errorMessage}</p>
        )}
      </motion.div>
    </section>
  )
}
