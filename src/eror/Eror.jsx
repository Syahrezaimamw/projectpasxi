import React from 'react'
import gambarerr from '../images/404.png'
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Eror = () => {
  return (
    <div className='flex flex-col justify-between text-lg bg-white md:min-h-[100vh] dark:bg-white d md:flex-row wrapper'>
      <div className='flex items-center justify-center mt-10 md:mt-0 '>
        <div className='flex flex-col items-center gap-5 md:items-start'>
          <h1 className='text-4xl font-bold text-center md:text-start'>Oops...</h1>
          <h3 className='text-2xl text-center md:text-start'>Page not found</h3>
          <p className='w-[95%] sm:w-[90%] lg:w-[70%] text-center md:text-start'>This Page doesn't exist or was removed!
            We suggest you return home.</p>
            <Link to={'/home'}>
          <button className='bg-[#2E77E9] text-white  px-6 py-2 text-[16px] rounded-md flex items-center  hover:bg-[#2D3E50] group'><FaArrowLeft className='transition-all duration-150 me-2 group-hover:-translate-x-2'/> Back to home</button>
            </Link>
        </div>

      </div>
      <div className='flex items-center justify-center mt-10 md:mt-0 '>
        <img src={gambarerr} alt="" />

      </div>
    </div>
  )
}

export default Eror
