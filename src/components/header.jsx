import React, { useState } from 'react'

export default function Header () {
  const [headerStyle, setHeaderStyle] = useState()
  const [menuOpacity, setMenuOpacity] = useState({
    visibility: 'hidden',
    opacity: 0
  })
  const [menuIsVisible, setMenuVisible] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
      setHeaderStyle({
        background: '#18002b8a',
        borderRadius: '50px',
        border: '1px solid #ffffff27',
        backdropFilter: 'blur(10px)'
      })
    } else {
      setHeaderStyle({})
    }
  })

  function handleMenu () {
    if (menuIsVisible) {
      setMenuOpacity({ visibility: 'hidden', opacity: 0 })
      setMenuVisible(false)
    } else {
      setMenuOpacity({ visibility: 'visible', opacity: 1 })
      setMenuVisible(true)
    }
  }

  return (
    <header>
      <nav id="navbar" style={headerStyle}>
        <div>
          <h1
            onClick={() => {
              window.location.reload()
            }}
          >
            DANIEL<span>DEV</span>
          </h1>
        </div>
        <div id="navbar-link">
          <ul>
            <li>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault()
                  document
                    .querySelector('#aboutme')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
                rel="noreferrer"
                aria-label="about section"
              >
                SOBRE
                <hr />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault()
                  document
                    .querySelector('#projects-container')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
                rel="noreferrer"
                aria-label="projects section"
              >
                PROJETOS
                <hr />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault()
                  document
                    .querySelector('#technology')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
                rel="noreferrer"
                aria-label="technology section"
              >
                TECNOLOGIAS
                <hr />
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault()
                  document
                    .querySelector('#contact-container')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
                rel="noreferrer"
                aria-label="contact section"
              >
                ENTRE EM CONTATO
                <hr />
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            handleMenu()
          }}
          id="phone-nav-link"
          style={menuIsVisible ? { opacity: 0 } : {}}
          aria-label="hamburguer nav button"
        >
          <div id="hamburguer-navlink">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      <div style={menuOpacity} id="phone-menu">
        <div id="close-phone-menu" onClick={handleMenu}>
          <div className="close-phone1"></div>
          <div className="close-phone2"></div>
        </div>
        <ul>
          <li onClick={handleMenu}>
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault()
                document
                  .querySelector('#aboutme')
                  .scrollIntoView({ behavior: 'smooth' })
              }}
              rel="noreferrer"
            >
              SOBRE MIM
            </a>
          </li>
          <hr />
          <li onClick={handleMenu}>
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault()
                document
                  .querySelector('#projects')
                  .scrollIntoView({ behavior: 'smooth' })
              }}
              rel="noreferrer"
            >
              PROJETOS
            </a>
          </li>
          <hr />
          <li onClick={handleMenu}>
            <a
              href="#"
              onClick={(evt) => {
                evt.preventDefault()
                document
                  .querySelector('#technology')
                  .scrollIntoView({ behavior: 'smooth' })
              }}
              rel="noreferrer"
            >
              TECNOLOGIAS
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
