import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import { useRef } from 'react'

const App = () => {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);
  return (
    <div className='text-neutral-300 overflow-hidden antialised selection:bg-darkblue-25 selection:text-darkblue-400'>
      {/* <motion.div ref={ref} style={{ x, y }} className='box'></motion.div> */}
      

      <div className='mx-auto px-20'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App


