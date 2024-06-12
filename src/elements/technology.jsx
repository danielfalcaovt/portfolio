import React from 'react'
import '../styles/technology.css'
import { allTechnologies } from '../data/technologies'

export default function Technology () {
  return (
    <>
      <section id='technology'>
        <div id='technology-title'>
          <h1>My Workbench</h1>
        </div>
        <div id='technologies'>
          {allTechnologies.map((tech) => {
            return (
              <div key={tech.id} className='card' id='technology-box'>
                <span>{tech.name}</span>
                <div className='content'>
                  <a rel='noreferrer' target='_blank' href={tech.url}>
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
