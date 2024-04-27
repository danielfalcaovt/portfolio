/* eslint-disable no-unused-vars */

import React from 'react'
import $ from 'jquery'
import '../styles/projects.css'
import { allProjects } from '../data/projects'

export default function Projects () {
  function handleMouseEnter (target) {
    $(`.box${target}>.project-about`).fadeIn().css('display', 'flex')
    $(`.box${target}>a>h1`).fadeIn()
    $(`.box${target}>a>p`).fadeIn()
  }

  function handleMouseLeave (target) {
    console.log(target)
    $(`.box${target}>.project-about`).fadeOut()
    $(`.box${target}>a>h1`).fadeOut()
    $(`.box${target}>a>p`).fadeOut()
  }

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
                  background: `#08000D url('./projects/${project.bg}') no-repeat left center/cover`
                }}
                onMouseEnter={() => {
                  handleMouseEnter(project.id)
                }}
                onMouseLeave={() => {
                  handleMouseLeave(project.id)
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
