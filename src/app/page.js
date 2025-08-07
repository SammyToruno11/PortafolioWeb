import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ScrollToTop from '@/components/ScrollToTop'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'


export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ScrollToTop />
      <ContactForm />
      <Footer />

    </>
  )
}
