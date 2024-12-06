/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { allProjects } from '../data/projects'

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [alreadyMoved, setAlreadyMoved] = useState(0)

  useEffect(() => {
    ScrollReveal().reveal('#projects-title>h1', {
      distance: '150%',
      delay: 50,
      duration: 1500,
      origin: 'top'
    })
  }, [])

  const [dragStyle, setDragStyle] = useState(0)
  const [pointerEvents, setPointerEvents] = useState(true)
  let startX = 0

  function mouseDown(e) {
    e.preventDefault()
    startX = e.clientX
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  function touchStart(e) {
    e.preventDefault()
    startX = e.touches[0].clientX
    document.addEventListener('touchmove', touchMove)
    document.addEventListener('touchend', mouseUp)
  }

  function mouseMove(e) {
    e.preventDefault()
    setPointerEvents(false)
    setDragStyle(() => {
      const result = alreadyMoved + (e.clientX - startX)
      console.log(alreadyMoved)
      if (result > 350) {
        return 320
      } else if (result > -4400) {
        return result
      } else {
        return -4200
      }
    })
  }

  function touchMove(e) {
    e.preventDefault()
    setPointerEvents(false)
    setDragStyle(() => {
      const result = alreadyMoved + (e.touches[0].clientX - startX)
      console.log(alreadyMoved)
      if (result > 100) {
        return 80
      } else if (result > -1300) {
        return result
      } else {
        return -1200
      }
    })
  }

  function mouseUp(e) {
    e.preventDefault()
    setPointerEvents(true)
    document.removeEventListener('touchmove', touchMove)
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
    document.removeEventListener('touchend', mouseUp)
  }

  useEffect(() => {
    setAlreadyMoved(dragStyle)
  }, [dragStyle])

  return (
    <section id="projects-container">
      <div id="projects-title">
        <h1>Mergulhe no meu mundo</h1>
      </div>
      <div id="projects">
        <div
          id="projects-carrosel"
          style={{
            transform: `translateX(${dragStyle}px)`,
            pointerEvents: pointerEvents ? 'all' : 'none'
          }}
          onMouseDown={mouseDown}
          onTouchStart={touchStart}
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
                    draggable="false"
                  >
                    <h1 draggable="false" className="project-title">
                      {project.name}
                    </h1>
                    <p draggable="false" className="project-type">
                      {project.type}
                    </p>
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
