/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import GithubButton from './buttons/github-button'
import VideoButton from './buttons/video-button'
import DeployButton from './buttons/deploy-button'
import CloseButton from './buttons/close-button'
import { ModalContext } from '../contexts/modal-context'

export default function ProjectsModal (props) {
  const { setModalProperties } = useContext(ModalContext)
  return (
    <div className="project-modal" style={props.style}>
      <CloseButton
        onClick={() => {
          setModalProperties({
            props: {},
            visible: false
          })
        }}
      />
      <div className="project-modal-header">
        <img src={`./assets/${props.project.bg}`} alt="project showcase image" />
      </div>
      <div className="project-modal-main">
        <div className="project-modal-content">
          <span>{props.project.type}</span>
          <h1>{props.project.name}</h1>
          <p>{props.project.description}</p>
        </div>
        <div className="project-technologies">
          {props.project.technologies?.map((tech) => {
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
          {props.project.video && (
            <button className="project-modal-btn-video project-button">
              <VideoButton link={props.project.video} />
            </button>
          )}
          {props.project.github && (
            <button className="project-modal-btn-github project-button">
              <GithubButton link={props.project.github} />
            </button>
          )}
          {props.project.deploy && (
            <button className="project-modal-btn-deploy project-button">
              <DeployButton link={props.project.deploy} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
