import React from 'react';
import logo from "../assets/userAsset/logo.png";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Updated Twitter icon import

const Navbar = () => {
  return (
    <nav className='mb-20 flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-0'>
      <div className='flex flex-shrink-0 items-center mb-4 md:mb-0'>
        <img src={logo} className='w-40' alt="Logo"></img>
      </div>
      <div className='flex gap-5'>
        <div className='flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/kamna-bhadoriya/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="https://github.com/Kamna16" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://twitter.com/kamnaBhadoriya" target='_blank' rel="noopener noreferrer"><FaTwitter/></a> {/* Updated Twitter profile link */}
        </div>
        <div>
          <button className='bg-white rounded-md p-1 text-black text-extrabold'>Resources</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
