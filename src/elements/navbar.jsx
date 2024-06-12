import React, { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar () {
  const [headerStyle, setHeaderStyle] = useState()
  const [menuOpacity, setMenuOpacity] = useState({ visibility: 'hidden', opacity: 0 })
  const [menuIsVisible, setMenuVisible] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
      setHeaderStyle({
        background: '#18002b8a',
        borderRadius: '50px',
        border: '1px solid #ffffff27'
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
      <nav id='navbar' style={headerStyle}>
        <div>
          <h1
            onClick={() => {
              window.location.reload()
            }}
          >
            DEENE<span>DEV</span>
          </h1>
        </div>
        <div id='navbar-link'>
          <ul>
            <li>
              <a href='#aboutme'>
                ABOUT
                <hr />
              </a>
            </li>
            <li>
              <a href='#projects'>
                PROJECTS
                <hr />
              </a>
            </li>
            <li>
              <a href='#technology'>
                TECHNOLOGY
                <hr />
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            handleMenu()
          }}
          id='phone-nav-link'
        >
          <div id='hamburguer-navlink'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      <div style={menuOpacity} id='phone-menu'>
        <ul>
          <li onClick={() => { handleMenu() }}>
            <a href='#aboutme'>
              ABOUT
            </a>
          </li>
          <hr/>
          <li onClick={() => { handleMenu() }}>
            <a href='#projects'>
              PROJECTS
            </a>
          </li>
          <hr/>
          <li onClick={() => { handleMenu() }}>
            <a href='#technology'>
              TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
