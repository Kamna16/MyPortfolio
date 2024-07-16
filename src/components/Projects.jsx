import React from 'react'
import { PROJECTS } from "../Constants"

const Projects = () => {
  return (
    <div className='pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <img className='mb-6 rounded' src={project.image} width={200} height={200} alt={project.title} />
                    </div>
                </div>
            ))}
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects