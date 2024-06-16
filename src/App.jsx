import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import About from './component/About'
import Projects from './component/Projects'
import Skill from './component/Skills'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <div id="app">
        <Header/>
        <Body/>
        <About/>
        <Projects/>
        <Skill/>
        <Footer/>
      </div>
    </>
  )
}

export default App
