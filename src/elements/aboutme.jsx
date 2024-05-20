/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import '../styles/aboutme.css'

export default function Aboutme () {
  const [textState, setTextState] = useState({ opacity: 100 })
  const myFunctions = [
    'Pianist',
    'Globetrotter',
    'Aquaman',
    'Problem Solver',
    'Coffeeholic',
    'Developer'
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
    }, 5000)
  }

  useEffect(() => {
    changeAboutMeCuriosity()
  }, [])

  return (
    <>
      <section id="aboutme">
        <article style={{ backgroundColor: '#18002B', backgroundImage: 'url("/deenedev.jpg")', backgroundSize: 'cover', backgroundPosition: 'center center' }} id='developerphoto'></article>
        <article id='aboutme-main'>
          <div draggable className='button'>
            <h1>ABOUT</h1>
          </div>
          <div id='aboutme-text'>
            <div>
              <h1 style={textState}>{functionExibida}</h1>
            </div>
            <div>
              <h2>I’m Daniel Falcão, a fullstack developer from Rio de Janeiro, Brazil and a technology lover. I’ll bring you my expertise developing next-level websites and web applications</h2>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
