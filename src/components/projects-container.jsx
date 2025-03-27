/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import ProjectsCarrosel from '../elements/projects-carrosel'
import { ModalContext } from '../contexts/modal-context'

export default function ProjectsContainer (props) {
  const { setModalProperties } = useContext(ModalContext)
  return (
    <>
      <section id="projects-container">
        <div id="projects-title">
          <h1>Mergulhe no meu mundo</h1>
        </div>
        <div id="projects">
          <ProjectsCarrosel setModalProperties={setModalProperties} />
        </div>
        <hr />
      </section>
    </>
  )
}
