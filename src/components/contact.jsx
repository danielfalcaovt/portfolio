import React from 'react'
import { useForm } from 'react-hook-form'
import ScrollReveal from 'scrollreveal'

export default function Contact () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm()

  async function onSubmit (data) {
    try {
      await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Envia os dados do formulário
      })
      reset()
    } catch (error) {
      console.error(error)
    }
  }
  React.useEffect(() => {
    ScrollReveal().reveal('#contact-title', {
      distance: '100px',
      delay: 50,
      duration: 1500,
      origin: 'top'
    })
  }, [])
  return (
    <section id="contact-container">
      <hr />
      <article id="contact-article">
        <h1 id="contact-title">Entrar em contato</h1>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nome"
            required
            {...register('subject')}
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            {...register('email')}
            className="contact-input"
          />
          <textarea
            placeholder="Mensagem"
            required
            {...register('body')}
            className="contact-textarea"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="contact-button"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {isSubmitSuccessful && (
            <p className="success-message">Obrigado pelo contato!</p>
          )}
        </form>
      </article>
    </section>
  )
}
