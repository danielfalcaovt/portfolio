/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Presentation () {
  const [mouseY, setMouseY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  return (
    <>
      <section style={{ backgroundColor: '#050505', backgroundImage: 'url("/bg.jpg")', backgroundSize: 'cover', backgroundPosition: `${mouseX}px ${mouseY}px`, backgroundRepeat: 'no-repeat' }} id='presentation'>
        <h1 draggable>deenedev</h1>
      </section>
    </>
  )
}
