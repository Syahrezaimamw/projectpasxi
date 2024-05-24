import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { Bars, BarsM } from '../lock/lok';
const Navdash = () => {
    const {sideShowM,setSideShowM}=useContext(BarsM)
    function handleShowSide() {
        sideShowM ? setSideShowM(false) : setSideShowM(true)
    }
    return (
        <div className={`w-full h-[70px] border-b-2 bg-white border-[#355B3E]/50  px-5 lg:px-[80px]  `}>
            <div className={`${sideShowM?'max-w-[1255px]':'max-w-[1440px]'} h-full m-auto flex justify-center items-center`}> 
                
            <div className='flex items-center justify-between w-full max-w-7xl'>
                <div className='hidden md:block '>
                    <FaBars onClick={handleShowSide} className='cursor-pointer' />
                </div>
                <div className='md:hidden'>
                    <FaBars onClick={()=>sideShowM?setSideShowM(false):setSideShowM(true)} className='cursor-pointer' />

                </div>
                <div className='flex items-center gap-2'>
                    <h1>Rimayu </h1>
                    <div className='size-[40px] rounded-full bg-gray-200'> </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Navdash
