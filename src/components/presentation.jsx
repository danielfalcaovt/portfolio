/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'

export default function Presentation (props) {
  const [fullText, setFullText] = useState([])
  const [chooseLetter, setChooseLetter] = useState(0)
  const presentationText = 'DANIELDEV'

  // seta o valor default de todas as letras
  useEffect(() => {
    const letters = []
    for (const letter of presentationText) {
      letters.push({
        letter,
        size: 1
      })
    }
    setFullText(letters)
  }, [])

  useEffect(() => {
    let count = 0

    const interval = setInterval(() => {
      if (count <= fullText.length) {
        setChooseLetter(count)
        count++
      } else {
        count = 0 // reinicia a contagem após o texto completo ser exibido
      }
    }, 500)

    return () => clearInterval(interval)
  }, [fullText.length])

  return (
    <>
      <section
        onMouseMove={props.onMouseMove}
        style={{
          backgroundColor: '#050505',
          backgroundImage: 'url("/bg.webp")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          ...props.style
        }}
        id="presentation"
      >
        {fullText.map(({ letter }, index) => {
          return (
            <span
              key={letter + index} // Use o índice em vez de Math.random() para garantir a estabilidade da chave
              style={{
                transform: index === chooseLetter ? 'translateY(-10px) translateX(-10px) rotate(-5deg)' : 'translate(0px)',
                transition: 'transform 0.7s ease-out, opacity 0.7s ease', // Transição mais suave
                opacity: chooseLetter === index ? '1' : '0.8'
              }}
            >
              {letter}
            </span>
          )
        })}
      </section>
    </>
  )
}
