/* eslint-disable no-unused-vars */

import React from 'react'
import '../styles/projects.css'
import { allProjects } from '../data/projects'

export default function Projects () {
  return (
    <section id='projects-container'>
      <div id='projects-title'>
        <div draggable id='projects-button'>
          <h1>WORK</h1>
        </div>
        <h1>Dig into my world</h1>
      </div>
      <div id='projects'>
        {allProjects.map((project) => {
          return (
            <div key={project.id} className='project-box'>
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
                  draggable
                >
                  <h1 className='project-title'>{project.name}</h1>
                  <p className='project-type'>{project.type}</p>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <hr />
    </section>
  )
}
