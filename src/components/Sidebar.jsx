import React, { useContext } from 'react'
import { FaX } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BarsM } from '../lock/lok';
// import { Bars } from '../lock/lok';
const Sidebar = ({ link }) => {
    const { sideShowM, setSideShowM } = useContext(BarsM)
    const data = [
        {
            nama: 'Home',
            href: '/home',
            ic: <FaHouse />
        },
      
      
        {
            nama: 'Laporan',
            href: '/laporan',
            ic: <FaFile />
        }, 
        {
            nama: 'Kelola Villa',
            href: '/vila',
            ic: <FaHouse />
        }, {
            nama: 'Kelola Denda',
            href: '/Denda',
            ic: <FaMoneyBill />
        },
        {
            nama: 'Kelola Catering',
            href: '/Catering',
            ic: <FaBowlFood />
        },
    ]
    return (
        <div className={`${sideShowM ? 'hidden md:block' : 'hidden'}  w-[320px] min-h-[100vh] border-r-2 border-[#355B3E]/50`}>
            <div className='w-full h-[70px] border-b-2  border-[#355B3E]/50 flex justify-center items-center font-semibold text-3xl'>
                Villa-In
            </div>
            <div className='flex justify-start px-4 mt-7'>
                <ul className='w-full px-4 space-y-3'>
                <li className='mb-3 text-lg font-semibold text-gray-500 '>MAIN MENU</li>
                    {
                        data.map((a, i) => (
                            <li className={`${a.href == link ? ' rounded-md text-[#355B3E] ' : ''} relative hover:bg-[#355B3E]  rounded-md hover:text-white group flex  py-2 w-full items-center gap-2 font-semibold `} key={i}>
                                <Link className='flex items-center gap-4 text-[17px] gray-700 text- group-hover:text-white' to={a.href}>
                                    {a.ic}{a.nama}
                                </Link>
                                {
                                    a.href === link ?
                                    <></>
                                    // <span className='absolute w-full h-[2px] bottom-0 left-0 bg-[#355B3E] '></span>
                                    :<></>
                                }
                                </li>
                        ))
                    }
                </ul>
            </div>
            {/* <div className='mt-[80px] rounded-lg bg-white border-2 bg-[#355B3E]/50  border-[#355B3E]/50 h-[200px] mx-4'>
                
            </div> */}

        </div>
    )
}

export default Sidebar
