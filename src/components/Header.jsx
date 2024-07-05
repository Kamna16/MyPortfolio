import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" p-3 bg-darkgrey-1200 text-white py-4">
      <nav className="container mx-auto flex justify-evenly items-center">
        <Link to="/">
        <div className="text-lg font-bold">My Portfolio</div>
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
