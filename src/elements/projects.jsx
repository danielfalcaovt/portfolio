/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { allProjects } from '../data/projects'

export default function Projects () {
  const [index, setIndex] = useState(0)
  function carrosel () {
    if (index >= allProjects.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      carrosel()
    }, 4500)
    return () => clearInterval(intervalId)
  })

  return (
    <section id='projects-container'>
      <div id='projects-title'>
        <h1 onClick={() => {
          carrosel()
        }}>Mergulhe no meu mundo</h1>
      </div>
      <div id='projects' style={{ transform: `translateX(${-100 * index}vw)` }}>
        {allProjects.map((project) => {
          return (
            <div key={project.id} className={'project-box'}>
              <div
                style={{
                  background: `#08000D url('./assets/${project.bg}') no-repeat left center/cover`
                }}
                className={`project-bg box${project.id}`}
              >
                <a
                  title={project.name}
                  rel='noreferrer'
                  target='_blank'
                  href={project.link}
                  className='project-about'
                  aria-label={project.name}
                  draggable
                >
                  <h1 className='project-title'>{project.name}</h1>
                  <p className='project-type'>{project.type}</p>
                </a>
              </div>
              <div className='project-anchor'>
              {project.github && <div className='project-github'>
                  <a href={project.github} target='_blank' rel='noreferrer' aria-label={`${project.name} github page`}>
                    <img title='Server' src='/assets/servidor.png' alt='github'/>
                  </a>
                </div>}
                {project.video && <div className='project-video'>
                  <a href={project.video} rel='noreferrer' target='_blank' aria-label='project video'>
                    <img title='Showcase Video' src='/assets/youtube.png' alt='youtube'/>
                  </a>
                </div>
                }
              </div>
            </div>
          )
        })}
      </div>
      <hr />
    </section>
  )
}
