/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import { allProjects } from '../data/projects'
import { ModalContext } from '../contexts/modal-context'

export default function ProjectsCarrosel () {
  const [alreadyMoved, setAlreadyMoved] = useState(0)
  const { setModalProperties } = useContext(ModalContext)

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

  function mouseDown (e) {
    e.preventDefault()
    startX = e.clientX
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  function touchStart (e) {
    e.preventDefault()
    startX = e.touches[0].clientX
    document.addEventListener('touchmove', touchMove)
    document.addEventListener('touchend', mouseUp)
  }

  function mouseMove (e) {
    e.preventDefault()
    setPointerEvents(false)
    setDragStyle(() => {
      const result = alreadyMoved + (e.clientX - startX)
      if (result > 350) {
        return 320
      } else if (result > -1200) {
        return result
      } else {
        return -1100
      }
    })
  }

  function touchMove (e) {
    e.preventDefault()
    setPointerEvents(false)
    setDragStyle(() => {
      const result = alreadyMoved + (e.touches[0].clientX - startX)
      if (result > 100) {
        return 80
      } else if (result > -700) {
        return result
      } else {
        return -680
      }
    })
  }

  function mouseUp (e) {
    setPointerEvents(true)
    document.removeEventListener('touchmove', touchMove)
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
    document.removeEventListener('touchend', mouseUp)
  }

  function openModal (e, project) {
    e.preventDefault()
    setModalProperties({
      visible: true,
      props: project
    })
  }

  useEffect(() => {
    setAlreadyMoved(dragStyle)
  }, [dragStyle])
  return (
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
              rel="noreferrer"
              onClick={(e) => {
                openModal(e, project)
              }}
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
          </div>
        )
      })}
    </div>
  )
}
