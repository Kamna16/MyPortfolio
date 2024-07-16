import React from 'react'
import { SiReact } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Technologies = () => {
  return (
    <div className='pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiReact className='text-6xl text-cyan-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <GrNode className='text-6xl text-green-500'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-6xl text-white'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-6xl text-[#31638C]'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-6xl text-orange-500'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-500'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiTypescript className='text-6xl text-[#2F74C0]'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-6xl text-yellow-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-6xl text-cyan-400'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <RiNextjsFill className='text-6xl'/>
            </div>
            <div className='rounded-xl border-4 border-neutral-800 p-4'>
                <IoLogoFirebase className='text-6xl text-orange-600'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies