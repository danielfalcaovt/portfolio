import React, { useEffect } from 'react'
import { allTechnologies } from '../data/technologies'
import ScrollReveal from 'scrollreveal'
import Technologies from '../elements/technologies'

export default function Technology () {
  useEffect(() => {
    for (const tech of allTechnologies) {
      ScrollReveal().reveal(`.card${tech.id}`, {
        duration: 300,
        delay: 90 * Number(tech.id),
        distance: '-90px'
      })
    }
  }, [])
  return (
    <>
      <section id="technology">
        <div id="technology-title">
          <h1>Minhas Ferramentas</h1>
        </div>
        <Technologies />
        <hr />
      </section>
    </>
  )
}
