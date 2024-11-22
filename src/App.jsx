/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Aboutme from './elements/aboutme'
import Presentation from './elements/presentation'
import Projects from './elements/projects'
import Footer from './elements/footer'
import Technology from './elements/technology'
import Header from './elements/header'

function App () {
  const [loading, setLoading] = useState(true)
  const [loadingAnimation, setLoadingAnimation] = useState({})
  const [presentationEffect, setPresEffect] = useState({ x: 0, y: 0 })

  function mouseMove (e) {
    let x, y
    if (e.clientX > document.querySelector('#root').clientWidth / 2) {
      x = 1
    } else {
      x = -1
    }
    if (e.clientY > document.querySelector('#presentation').clientHeight / 2) {
      y = 1
    } else {
      y = -1
    }
    setPresEffect({ x, y })
  }

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
        ? <div className="loading-container">
          <div style={loadingAnimation} className="loading"></div>
        </div>
        : (
            ''
          )}
      <Header />
      <main>
        <Presentation
          onMouseMove={mouseMove}
          style={{
            transform: `rotateX(${presentationEffect.y}deg) rotateY(${presentationEffect.x}deg) scale(1.1)`
          }}
        />
        <Aboutme />
        <Projects />
        <Technology />
      </main>
      <Footer />
    </>
  )
}

export default App
