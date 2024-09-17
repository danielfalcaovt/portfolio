/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { allProjects } from '../data/projects'

export default function Projects () {
  const [index, setIndex] = useState(-1)
  function carrosel (dir) {
    if (dir === 1) {
      if (index >= allProjects.length - 2) {
        setIndex(-1)
      } else {
        setIndex(index + 1)
      }
    } else {
      if (index > -1) {
        setIndex(index - 1)
      } else {
        setIndex(allProjects.length - 2)
      }
    }
  }

  return (
    <section id="projects-container">
      <div id="projects-title">
        <img
          src="/assets/arrow.png"
          onClick={() => {
            carrosel(2)
          }}
          className='projects-arrow left-arrow'
          alt="left arrow"
        />
        <h1>Mergulhe no meu mundo</h1>
        <img
          src="/assets/arrow.png"
          onClick={() => {
            carrosel(1)
          }}
          className='projects-arrow right-arrow'
          alt="right arrow"
        />
      </div>
      <div id="projects">
        <div
          id="projects-carrosel"
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
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
                    rel="noreferrer"
                    target="_blank"
                    href={project.link}
                    className="project-about"
                    aria-label={project.name}
                    draggable
                  >
                    <h1 className="project-title">{project.name}</h1>
                    <p className="project-type">{project.type}</p>
                  </a>
                </div>
                <div className="project-anchor">
                  {project.github && (
                    <div className="project-github">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} github page`}
                      >
                        <img
                          title="Server"
                          src="/assets/servidor.png"
                          alt="github"
                        />
                      </a>
                    </div>
                  )}
                  {project.video && (
                    <div className="project-video">
                      <a
                        href={project.video}
                        rel="noreferrer"
                        target="_blank"
                        aria-label="project video"
                      >
                        <img
                          title="Showcase Video"
                          src="/assets/youtube.png"
                          alt="youtube"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <hr />
    </section>
  )
}
