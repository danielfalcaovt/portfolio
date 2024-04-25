/* eslint-disable no-unused-vars */

import React from 'react'
import $ from 'jquery'
import '../styles/projects.css'

export default function Projects () {
  function handleMouseEnter (target) {
    $(`.box${target}>.project-about`).fadeIn().css('display', 'flex')
    $(`.box${target}>a>h1`).slideDown()
    $(`.box${target}>a>p`).slideDown()
  }

  function handleMouseLeave (target) {
    console.log(target)
    $(`.box${target}>.project-about`).fadeOut()
    $(`.box${target}>a>h1`).slideUp()
    $(`.box${target}>a>p`).slideUp()
  }

  return (
    <article id='projects-container'>
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
                  <p className='project-type'>{project.title}</p>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

const allProjects = [
  {
    id: 1,
    name: 'Gestor de Alunos',
    type: 'Web App',
    bg: 'project1.PNG',
    link: 'https://www.youtube.com/watch?v=mVQNrQVGPrk&ab_channel=deenedev'
  },
  {
    id: 2,
    name: 'MY BOOKSHELF',
    type: 'Website',
    bg: 'project2.PNG',
    link: 'https://my-bookshelf-three.vercel.app/'
  },
  {
    id: 3,
    name: 'S.C.E.A.',
    type: 'Website',
    bg: '',
    link: 'https://github.com/danielfalcaovt/SCEA'
  },
  {
    id: 4,
    name: 'HOME PAGE',
    type: 'Website',
    bg: 'project4.PNG',
    link: 'https://danielfalcaovt.github.io/Odin-Projects/Home-page/'
  },
  {
    id: 5,
    name: 'LOGIN PAGE',
    type: 'Website',
    bg: 'project5.PNG',
    link: 'https://danielfalcaovt.github.io/Odin-Projects/Login-page/'
  }
]
