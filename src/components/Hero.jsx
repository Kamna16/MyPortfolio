import React from 'react'
import blob from "../assets/userAsset/blob vector.png"
import {HERO_CONTENT} from "../Constants/index"

const Hero = () => {
  return (
    <div className='pb-2 lg:mb-35'>
        <div className='flex flex-wrap justify-between'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-10 text-4xl font-thin tracking-tight lg:mt-10 lg:text-7xl'><span className='text-3xl tracking-tight'>Hello I'm </span>Kamna</h1>
                <span className='bg-gradient-to-r from-purple-300 via-slate-500 to-darkblue-50 bg-clip-text text-4xl tracking-tight text-transparent'>
                    A Full Stack Developer
                </span>
                <p className='my-2 max-w-xl py-6 font-light'>{HERO_CONTENT}</p>
            </div>
            </div>
            <div className=''>
              
            </div>
        </div>
    </div>
  )
}

export default Hero