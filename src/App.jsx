/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Aboutme from './elements/aboutme'
import Presentation from './elements/presentation'
import Projects from './elements/projects'
import Footer from './elements/footer'
import Technology from './elements/technology'
import Navbar from './elements/navbar'

function App () {
  const [loading, setLoading] = useState(true)
  const [loadingAnimation, setLoadingAnimation] = useState({})

  function finishLoad () {
    setLoading(false)
  }

  function handleAnimation () {
    setLoadingAnimation({ transform: 'scale(0)' })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      handleAnimation()
      setTimeout(() => {
        finishLoad()
      }, 300)
    }, 500)
  }, [])

  return (
    <>
      {loading
        ? <div className='loading-container'>
        <div style={loadingAnimation} className='loading'>
        </div>
      </div>
        : ''}
      <main>
        <Navbar />
        <Presentation />
        <Aboutme />
        <Projects />
        <Technology />
        <Footer />
      </main>
    </>
  )
}

export default App
