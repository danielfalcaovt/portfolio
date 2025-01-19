import React from 'react'
import { allTechnologies } from '../data/technologies'

export default function Technologies () {
  return (
    <div id="technologies">
      {allTechnologies.map((tech) => {
        return (
          <div
            key={tech.id}
            className={'card'}
            id="technology-box"
            style={{ [`--choosencolor${tech.id}`]: tech.color, background: `linear-gradient( 45deg, var(--choosencolor${tech.id}), var(--choosencolor${tech.id}) )` }}
            >
            <span></span>
            <div className="content">
              <a
                rel="noreferrer"
                target="_blank"
                aria-label={tech.name}
                href={tech.url}
              >
                <img src={`./assets/tech/${tech.img}`} alt={`${tech.name}`} />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
