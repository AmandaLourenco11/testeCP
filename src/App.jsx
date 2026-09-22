import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Funcionalidades from './components/Funcionalidades'
import Menu from './components/Menu'
import Avaliacoes from './components/Avaliacoes'
import Formulario from './components/Formulario'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Funcionalidades />
        <Menu />
        <Avaliacoes />
        <Formulario />
      </main>
      <Footer />
    </>
  )
}
