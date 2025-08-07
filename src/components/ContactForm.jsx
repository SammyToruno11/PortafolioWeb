'use client'

import React, { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'

export default function ContactForm() {
    const { language } = useLanguage()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState("") // Mensaje de éxito después de enviar
    const [errorMessage, setErrorMessage] = useState("") // Mensaje de error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Aquí integramos EmailJS para el envío de correo
        const serviceID = 'service_portafolio';  // Obtén el service_id de tu cuenta de EmailJS
        const templateID = 'template_qem051g'; // Obtén el template_id de tu cuenta de EmailJS
        const userID = 'GKw7f_ixd75BQw5LG'; // Obtén el user_id de tu cuenta de EmailJS

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        try {
            // Enviamos el correo usando EmailJS
            const result = await emailjs.send(serviceID, templateID, templateParams, userID);
            console.log(result.text); // Imprimir resultado en consola

            setIsSubmitting(false);
            setSuccessMessage(language === "es" ? "¡Gracias por tu mensaje! Te responderé pronto." : "Thank you for your message! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setIsSubmitting(false);
            console.error(error);
            setErrorMessage(language === "es" ? "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente." : "There was an error sending the form. Please try again.");
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
            errorMessage: "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente."
        },
        en: {
            title: "Contact",
            name: "Name",
            email: "Email",
            message: "Message",
            button: "Send",
            successMessage: "Thank you for your message! I'll get back to you soon.",
            errorMessage: "There was an error sending the form. Please try again."
        }
    }

    const t = texts[language]

    return (
        <section
            id="contacto"
            className="flex justify-center bg-[#E7E3DD] py-16"  // Reducido el espacio vertical
            style={{ fontFamily: 'var(--font-montserrat)', color: '#043353' }}
        >
            <motion.div
                className="max-w-xl w-full px-6"  // Aumenté el ancho del formulario
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                }}
                initial={{ opacity: 0, y: 20 }}  // Animación de entrada
                whileInView={{ opacity: 1, y: 0 }}  // Animación de aparición
                transition={{ duration: 0.4 }}  // Duración de la animación
                viewport={{ once: true, amount: 0.3 }}  // Activar la animación cuando el 30% del div es visible
            >
                <h2
                    className="text-3xl font-semibold text-center mb-5"
                    style={{
                        fontFamily: 'var(--font-playfair)',
                        color: '#043353',
                        fontSize: '1.875rem',  // Un tamaño de fuente más pequeño
                    }}
                >
                    {t.title}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4"> {/* Espaciado más pequeño */}
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
                            placeholder="Escribe tu nombre"
                            required
                            style={{
                                backgroundColor: "#f5f5f5",
                                color: "#043353",
                                fontFamily: 'var(--font-montserrat)',
                            }}
                        />
                    </div>

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
                            placeholder="Escribe tu correo electrónico"
                            required
                            style={{
                                backgroundColor: "#f5f5f5",
                                color: "#043353",
                                fontFamily: 'var(--font-montserrat)',
                            }}
                        />
                    </div>

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
                            placeholder="Escribe tu mensaje"
                            rows="3"  // Reducido el tamaño de filas
                            required
                            style={{
                                backgroundColor: "#f5f5f5",
                                color: "#043353",
                                fontFamily: 'var(--font-montserrat)',
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-auto px-6 py-2 bg-[#BB2649] text-white font-semibold rounded-lg hover:bg-[#043353] transition-all mx-auto block"
                        disabled={isSubmitting}
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        {isSubmitting ? 'Enviando...' : t.button}
                    </button>
                </form>

                {/* WhatsApp Button */}
                <div className="mt-4 flex justify-center mb-6"> {/* Agregado mb-6 para espacio debajo */}
                    <a
                        href="https://wa.me/84909877"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-[#043353] text-white rounded-lg hover:bg-[#BB2649] transition-all"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                        <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
                    </a>
                </div>

                {/* Mensaje de éxito */}
                {successMessage && (
                    <p className="text-center text-lg font-semibold mt-4 text-green-600">{successMessage}</p>
                )}

                {/* Mensaje de error */}
                {errorMessage && (
                    <p className="text-center text-lg font-semibold mt-4 text-red-600">{errorMessage}</p>
                )}
            </motion.div>
        </section>
    )
}
