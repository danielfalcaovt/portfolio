/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Aboutme from './components/aboutme'
import Presentation from './components/presentation'
import ProjectsContainer from './components/projects-container'
import Footer from './components/footer'
import Technology from './components/technology'
import Header from './components/header'
import ProjectsModal from './elements/projects-modal'
import { ModalContext } from './contexts/modal-context'

function App () {
  const [loading, setLoading] = useState(true)
  const [loadingAnimation, setLoadingAnimation] = useState({})
  const [presentationEffect, setPresEffect] = useState({ x: 0, y: 0 })
  const [modalProperties, setModalProperties] = useState({
    visible: false,
    props: {}
  })
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
    <ModalContext.Provider value={{ modalProperties, setModalProperties }}>
      {loading
        ? (
        <div className="loading-container">
          <div style={loadingAnimation} className="loading"></div>
        </div>
          )
        : (
            ''
          )}
      <Header />
      {modalProperties.visible && (
        <ProjectsModal
          {...modalProperties.props}
        />
      )}
      <main>
        <Presentation
          onMouseMove={mouseMove}
          style={{
            transform: `rotateX(${presentationEffect.y}deg) rotateY(${presentationEffect.x}deg) scale(1.1)`
          }}
        />
        <Aboutme />
        <ProjectsContainer />
        <Technology />
      </main>
      <Footer />
    </ModalContext.Provider>
  )
}

export default App
