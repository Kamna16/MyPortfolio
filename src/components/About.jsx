import React from 'react'
import about from "../assets/userAsset/about.png"
import { ABOUT_TEXT } from '../Constants'

const About = () => {
  return (
    <div className='overflow-y-hidden'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='flex items-center flex-wrap'>
          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
              <img className='' src={about} alt="about" />
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                  <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About