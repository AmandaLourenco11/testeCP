import { useState } from 'react'

const ContactForm = () => {
  const [enviado, setEnviado] = useState(false)

  function enviar(evento) {
    evento.preventDefault()
    setEnviado(true)
    evento.target.reset()
  }

  return (
    <section id="contato" className="py-24 px-6 bg-rose-400">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-4 text-stone-950">Receba novidades e cupons</h2>
        <p className="text-stone-950/70 mb-8">Cadastre seu e-mail e seja avisado sobre promoções e lançamentos.</p>

        <form onSubmit={enviar} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="text" placeholder="Seu nome" className="w-full bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-500 outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-800/20" />
          <input type="email" placeholder="Seu e-mail" className="w-full bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-500 outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-800/20" />
          <button className="bg-stone-950 text-white px-7 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors">Cadastrar</button>
        </form>

        {enviado && <p className="mt-4 text-stone-950 font-medium">Cadastro realizado! 🎉</p>}
      </div>
    </section>
  )
}

export default ContactForm