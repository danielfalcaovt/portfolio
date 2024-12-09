/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Presentation (props) {
  return (
    <>
      <section onMouseMove={props.onMouseMove} style={{ backgroundColor: '#050505', backgroundImage: 'url("/bg.webp")', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', ...props.style }} id='presentation'>
        <h1 draggable>deenedev</h1>
      </section>
    </>
  )
}
