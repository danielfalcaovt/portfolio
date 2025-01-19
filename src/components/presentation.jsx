/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function Presentation (props) {
  const [fullText, setFullText] = useState([])
  const presentationText = 'deenedev'

  useEffect(() => {
    for (const i of presentationText) {
      setFullText(oldValue => {
        return [...oldValue, i]
      })
    }
  }, [])
  return (
    <>
      <section onMouseMove={props.onMouseMove} style={{ backgroundColor: '#050505', backgroundImage: 'url("/bg.webp")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', ...props.style }} id='presentation'>
        {fullText.map(word => {
          return <span key={1}>{word}</span>
        })}
      </section>
    </>
  )
}
