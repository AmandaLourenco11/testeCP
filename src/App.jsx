import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import MenuHighlights from './components/MenuHighlights'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <MenuHighlights />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
