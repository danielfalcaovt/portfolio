/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Aboutme from './elements/aboutme'
import Presentation from './elements/presentation'
import Projects from './elements/projects'
import './styles/index.css'
import Footer from './elements/footer'
import Technology from './elements/technology'
import Navbar from './elements/navbar'

function App () {
  return (
    <main>
      <Navbar />
      <Presentation />
      <Aboutme />
      <Projects />
      <Technology />
      <Footer />
    </main>
  )
}

export default App
