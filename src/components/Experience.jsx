import React from 'react'
import { EXPERIENCES } from '../Constants'

const Experience = () => {
  return (
    <div className='pb-4'>
        <h1 className='my-20 text-center text-4xl'>Experience</h1>
        <div>
            {EXPERIENCES.map((experience,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>
                    {experience.technologies.map((technology,index) => (
                        <span className='mr-2 mt-4 rounded bg-neutral-300 px-2 py-1 text-sm font-md text-darkblue-100' key={index}>{technology}</span>
                    ))}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Experience