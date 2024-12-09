/* eslint-disable no-unused-vars */

import React from 'react'
import ProjectsCarrosel from '../elements/projects-carrosel'

export default function ProjectsContainer () {
  return (
    <section id="projects-container">
      <div id="projects-title">
        <h1>Mergulhe no meu mundo</h1>
      </div>
      <div id="projects">
        <ProjectsCarrosel />
      </div>
      <hr />
    </section>
  )
}
