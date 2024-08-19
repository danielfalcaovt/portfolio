import React from 'react'
import { allTechnologies } from '../data/technologies'

export default function Technology () {
  return (
    <>
      <section id='technology'>
        <div id='technology-title'>
          <h1>Meu Arsenal</h1>
        </div>
        <div id='technologies'>
          {allTechnologies.map((tech) => {
            return (
              <div key={tech.id} className={`card card${tech.id}`} id='technology-box' style={{ [`--choosencolor${tech.id}`]: tech.color }}>
                <span>{tech.name}</span>
                <div className='content'>
                  <a rel='noreferrer' target='_blank' aria-label={tech.name} href={tech.url}>
                    <img src={`./assets/${tech.img}`} alt={`${tech.name}`}/>
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
