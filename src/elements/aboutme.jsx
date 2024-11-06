/* eslint-disable no-unused-vars */
import ScrollReveal from 'scrollreveal'
import React, { useEffect, useState } from 'react'

export default function Aboutme () {
  const [textState, setTextState] = useState({ opacity: 100 })
  const myFunctions = [
    'Desenvolvedor',
    'Viajante',
    'Solucionador de Problemas',
    'Viciado em Café',
    'Corredor'
  ]
  const [functionExibida, setFuncaoExibida] = useState(myFunctions[0])

  function changeAboutMeCuriosity () {
    let pos = 0
    setInterval(() => {
      setTextState({ opacity: 100 })
      setFuncaoExibida(myFunctions[pos++])
      if (pos === 6) {
        pos = 0
      }
      setTimeout(() => {
        setTextState({ opacity: 0 })
      }, 3000)
    }, 4000)
  }

  useEffect(() => {
    changeAboutMeCuriosity()
    ScrollReveal().reveal('#aboutme-text>div', {
      distance: '100px',
      delay: 50,
      duration: 1500,
      origin: 'right'
    })
  }, [])

  return (
    <>
      <section id="aboutme">
        <article style={{ backgroundColor: '#18002B', backgroundImage: 'url("/deenedev.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }} id='developerphoto'></article>
        <article id='aboutme-main'>
          <div id='aboutme-text'>
            <div>
              <h1 style={textState} draggable>{functionExibida}</h1>
            </div>
            <div>
              <h2>Olá! Sou Daniel Falcão, um desenvolvedor fullstack, e um amante fiel da tecnologia. Transformarei sua ideia em realidade digital através da minha expertise desenvolvendo aplicações web e sites profissionais.</h2>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
