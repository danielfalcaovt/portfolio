/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { allProjects } from '../data/projects'

export default function Projects () {
  const [index, setIndex] = useState(0)
  const [arrowMoving, setArrowMoving] = useState(false)
  function carrosel (dir) {
    setArrowMoving(true)
    if (dir === 1) {
      if (index >= allProjects.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    } else {
      if (index > 0) {
        setIndex(index - 1)
      } else {
        setIndex(allProjects.length - 1)
      }
    }
  }

  useEffect(() => {
    const elementsInDiv = [
      { el: '.left-arrow', origin: 'right' },
      { el: '#projects-title>h1', origin: 'top' },
      { el: '.right-arrow', origin: 'right' }
    ]
    for (const pos of elementsInDiv) {
      ScrollReveal().reveal(pos.el, {
        distance: '150%',
        delay: 50,
        duration: 1500,
        origin: pos.origin
      })
    }
  }, [])

  const [dragStyle, setDragStyle] = useState(0)
  const [alreadyMoved, setAlreadyMoved] = useState(0)
  const [pointerEvents, setPointerEvents] = useState(true)
  let startX = 0

  function mouseDown (e) {
    startX = e.clientX
    setArrowMoving(false)
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  function mouseMove (e) {
    setPointerEvents(false)
    setDragStyle(() => {
      const result = alreadyMoved + (e.clientX - startX)
      if (result > -3200) {
        return result
      } else {
        return -3000
      }
    })
  }

  function mouseUp (e) {
    setPointerEvents(true)
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }

  useEffect(() => {
    setAlreadyMoved(dragStyle)
  }, [dragStyle])

  return (
    <section
      id="projects-container"
      >
      <div id="projects-title">
        <img
          src="/assets/arrow.png"
          onClick={() => {
            carrosel(2)
          }}
          className="projects-arrow left-arrow"
          alt="left arrow"
        />
        <h1>Mergulhe no meu mundo</h1>
        <img
          src="/assets/arrow.png"
          onClick={() => {
            carrosel(1)
          }}
          className="projects-arrow right-arrow"
          alt="right arrow"
          />
      </div>
      <div id="projects">
        <div
          id="projects-carrosel"
          style={arrowMoving ? { transform: `translateX(${-100 * index}vw)` } : { transform: `translateX(${dragStyle}px)`, pointerEvents: pointerEvents ? 'all' : 'none' }}
          onMouseDown={mouseDown}
          onDragEnter={mouseDown}
          onTouchStart={mouseDown}
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
                    <h1 draggable="false" className="project-title">{project.name}</h1>
                    <p draggable="false" className="project-type">{project.type}</p>
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
