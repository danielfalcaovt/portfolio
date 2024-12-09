import React, { useEffect } from 'react'
import { allTechnologies } from '../data/technologies'
import ScrollReveal from 'scrollreveal'

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
        <div id="technologies">
          {allTechnologies.map((tech) => {
            return (
              <div
                key={tech.id}
                className={`card card${tech.id}`}
                id="technology-box"
                style={{ [`--choosencolor${tech.id}`]: tech.color }}
              >
                <span></span>
                <div className="content">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    aria-label={tech.name}
                    href={tech.url}
                  >
                    <img
                      src={`./assets/tech/${tech.img}`}
                      alt={`${tech.name}`}
                    />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
