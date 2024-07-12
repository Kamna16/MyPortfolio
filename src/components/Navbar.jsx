import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-evenly py-6'>
        <div className='flex flex-shrink-0 items-center'>
           <button className='text-2xl font-extrabold'>Kamna Bhadoriya</button>
        </div>
        <div className='flex gap-5'>
        <div className='flex items-center justify-center gap-4 text-2xl'>
          <FaLinkedin/>
          <FaGithub/>
          <FaSquareXTwitter/>
        </div>
        <div>
          <button className='bg-white rounded-md p-1 text-black text-extrabold'>Resources</button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar