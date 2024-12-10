/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import ProjectsCarrosel from '../elements/projects-carrosel'
import ProjectsModal from '../elements/projects-modal'

export default function ProjectsContainer () {
  const [modalProperties, setModalProperties] = useState({
    visible: false,
    props: {}
  })
  return (
    <section id="projects-container">
       {modalProperties.visible && <ProjectsModal {...modalProperties.props} />}
      <div id="projects-title">
        <h1>Mergulhe no meu mundo</h1>
      </div>
      <div id="projects">
        <ProjectsCarrosel setModalProperties={setModalProperties} />
      </div>
      <hr />
    </section>
  )
}
