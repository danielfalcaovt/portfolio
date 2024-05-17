import React, { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar () {
  const [headerStyle, setHeaderStyle] = useState()
  window.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
      setHeaderStyle({ background: '#18002b8a', borderRadius: '50px', border: '1px solid #ffffff27' })
    } else {
      setHeaderStyle({})
    }
  })

  return (
    <header>
      <nav id="navbar" style={headerStyle}>
        <div>
          <h1 onClick={() => {
            window.location.reload()
          }}>
            DEENE<span>DEV</span>
          </h1>
        </div>
        <div id='navbar-link'>
          <ul>
            <li>
              <a href="#aboutme">
                ABOUT
                <hr/>
              </a>
            </li>
            <li>
              <a href="#projects">
                PROJECTS
                <hr/>
              </a>
            </li>
            <li>
              <a href="#technology">
                TECHNOLOGY
                <hr/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
