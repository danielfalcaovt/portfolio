/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'

export default function Presentation (props) {
  const [fullText, setFullText] = useState([])
  const [bLetterCount, setBLetterC] = useState(-1)
  const presentationText = 'FALCÃODEV'

  useEffect(() => {
    for (const i of presentationText) {
      setFullText((oldValue) => {
        return [...oldValue, i]
      })
    }
  }, [])

  function atualizarContexto () {
    let count = 0
    setInterval(() => {
      setBLetterC(-1)
      const interval = setInterval(() => {
        if (count < presentationText.length) {
          setBLetterC((oldValue) => {
            return oldValue + 1
          })
          count++
        } else {
          setBLetterC(-1)
          clearInterval(interval)
          count = 0
        }
      }, 100)
    }, 2000)
  }

  useEffect(() => {
    atualizarContexto()
  }, [])

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
        {fullText.map((word, i) => {
          return (
            <span
              style={{
                transform: `scale(${i === bLetterCount ? '1.1' : '1'})'})`
              }}
              key={i}
            >
              {word}
            </span>
          )
        })}
      </section>
    </>
  )
}
