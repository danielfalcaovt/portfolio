/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import '../styles/aboutme.css'

export default function Aboutme () {
  const [thingAboutMe, setThing] = useState()
  let randomNum = Math.floor(Math.random() * myFunctions.length)

  function handleThingAboutMe () {
    randomNum = Math.floor(Math.random() * myFunctions.length)
    setThing(myFunctions[randomNum])
  }
  useEffect(() => {
    setThing(myFunctions[randomNum])
    setInterval(() => {
      $('#aboutme-text h1').fadeOut()
      setTimeout(() => {
        handleThingAboutMe()
        $('#aboutme-text h1').fadeIn()
      }, 2000)
    }, 7000)
  }, [])

  return (
    <>
      <article id="aboutme">
        <section id='developerphoto'></section>
        <section id='aboutme-main'>
          <div id='aboutme-button'>
            <h1>ABOUT</h1>
          </div>
          <div id='aboutme-text'>
            <div>
              <h1>{thingAboutMe}</h1>
            </div>
            <div>
              <h2>I’m Daniel Falcão, a fullstack developer from Rio de Janeiro, Brazil and a technology lover. I’ll bring you my expertise developing next-level websites and web applications</h2>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

const myFunctions = [
  'Pianist',
  'Globetrotter',
  'Aquaman',
  'Problem Solver',
  'Coffeeholic',
  'Developer'
]
