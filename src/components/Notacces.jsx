import React from 'react'
import padlock from '../images/padlock.png'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import ListNav from './ListNav';
const Notacces = () => {
  return (
    <div className='flex items-center justify-center min-h-[100dvh] bg-white dark:bg-white wrapper '>
        <div className='flex flex-col items-center'>
            <img src={padlock} alt="" />
            <h1 className='mt-2 text-xl font-semibold text-center'>Not Acces</h1>
            <p className='mt-1 text-center'>You are not registered as an admin</p>
            <Link to='/' className='flex items-center gap-2 mt-1 text-center hover:underline group' ><FaArrowLeft className='group-hover:-translate-x-2 transition-all duration-300 text-[14px] mt-1 '/> return to the login page</Link>
        </div>
        

      
    </div>
  )
}

export default Notacces
