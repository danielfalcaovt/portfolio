/* eslint-disable no-unused-vars */
import React from 'react'
import Aboutme from './elements/aboutme'
import Presentation from './elements/presentation'
import Projects from './elements/projects'
import './styles/index.css'
import Footer from './elements/footer'
import Technology from './elements/technology'

function App () {
  return (
    <main>
      <Presentation />
      <Aboutme />
      <Projects />
      <Technology />
      <Footer />
    </main>
  )
}

export default App
