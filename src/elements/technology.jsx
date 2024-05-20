import React, { useState } from 'react'
import '../styles/technology.css'
import { allTechnologies } from '../data/technologies'

export default function Technology () {
  const [moved, setMoved] = useState({ transform: 'translateX(198px)' })
  const [leftArrowState, setLeftArr] = useState('invisible')
  const [rightArrowState, setRightArr] = useState()

  function moveTechnologies (evt) {
    if (evt.currentTarget.id === 'left-arrow') {
      setMoved({ transform: 'translateX(198px)' })
      setLeftArr('invisible')
      setRightArr('')
    } else {
      setMoved({ transform: 'translateX(-198px)' })
      setRightArr('invisible')
      setLeftArr('')
    }
  }

  return (
    <>
      <section id='technology'>
        <div id='technology-title'>
          <h1>My Workbench</h1>
        </div>
        <div onClick={moveTechnologies} className={`moving-arrow-tech ${leftArrowState}`} id='left-arrow'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-left-square-fill" viewBox="0 0 16 16">
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12"/>
          </svg>
        </div>
        <div style={moved} id='technologies'>
          {allTechnologies.map((tech) => {
            return (
              <div key={tech.id} className='card' id='technology-box'>
                <span>{tech.name}</span>
                <div className='content'>
                  <a rel='noreferrer' target='_blank' href={tech.url}>
                    <img src={`./assets/${tech.img}`} alt={`${tech.name}`}/>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
          <div onClick={moveTechnologies} className={`moving-arrow-tech ${rightArrowState}`} id='right-arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4z"/>
            </svg>
          </div>
      </section>
    </>
  )
}
