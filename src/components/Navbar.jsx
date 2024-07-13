import React from 'react'
import logo from "../assets/userAsset/logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
           <img src={logo} className='w-40'></img>
        </div>
        <div className='flex gap-5'>
        <div className='flex items-center justify-center gap-4 text-2xl'>
          <FaLinkedin/>
          <FaGithub/>
          <FaSquareXTwitter/>
          {/* <Link to={"https://www.linkedin.com/in/kamna-bhadoriya/"}>
            <FaLinkedin/>
          </Link>
          <Link to={"https://github.com/Kamna16"}>
            <FaGithub/>
          </Link>
          <Link to={"https://x.com/kamnaBhadoriya"}>
            <FaSquareXTwitter/>
          </Link>  */}
        </div>
        <div>
          <button className='bg-white rounded-md p-1 text-black text-extrabold'>Resources</button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar