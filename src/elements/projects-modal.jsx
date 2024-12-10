/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import GithubButton from './buttons/github-button'
import VideoButton from './buttons/video-button'
import DeployButton from './buttons/deploy-button'
import CloseButton from './buttons/close-button'
import { ModalContext } from '../contexts/modal-context'

export default function ProjectsModal (project) {
  const { setModalProperties } = useContext(ModalContext)
  return (
    <div className="project-modal">
      <CloseButton
        onClick={() => {
          setModalProperties({
            props: {},
            visible: false
          })
        }}
      />
      <div className="project-modal-header">
        <img src={`./assets/${project.bg}`} alt="project showcase image" />
      </div>
      <div className="project-modal-main">
        <div className="project-modal-content">
          <span>{project.type}</span>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        <div className="project-technologies">
          {project.technologies.map((tech) => {
            return (
              <img
                key={tech}
                src={`./assets/tech/${tech}.png`}
                alt={tech}
              ></img>
            )
          })}
        </div>
        <div className="project-modal-nav">
          {project.video && (
            <button className="project-modal-btn-video project-button">
              <VideoButton link={project.video} />
            </button>
          )}
          {project.github && (
            <button className="project-modal-btn-github project-button">
              <GithubButton link={project.github} />
            </button>
          )}
          {project.deploy && (
            <button className="project-modal-btn-deploy project-button">
              <DeployButton link={project.deploy} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
