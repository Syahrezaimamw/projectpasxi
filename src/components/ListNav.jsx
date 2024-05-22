import React from 'react'
import { FaX } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ListNav = ({ show, link, setShow }) => {

    const data = [
        {
            nama: 'Home',
            href: '/home',
            ic:<FaHouse/>
        },
        {
            nama: 'Kelola Villa',
            href: '/vila',
            ic:<FaHouse/>
        },
        {
            nama: 'Kelola Denda',
            href: '/Denda',
            ic:<FaMoneyBill/>
        },
        {
            nama: 'Kelola Catering',
            href: '/Catering',
            ic:<FaBowlFood/>
        },
        {
            nama: 'Laporan',
            href: '/Laporan',
            ic:<FaFile/>
        },
    ]

    const dataAdmin = JSON.parse(localStorage.getItem('dataLoginVila'))
    function closeShow(){
        setShow(false)
    }
    return (
        <div className={`${show ? 'flex' : 'hidden'}  transition-all duration-500 md:hidden z-90 w-full min-h-[100vh]  fixed`}>

            <div className='w-[75%] bg-white px-5 py-4'>

                <div className='flex justify-between w-full pb-3 border-b-2 border-gray-200'>
                    <div className=''>
                        <div className='size-[60px] overflow-hidden border-2 flex items-center justify-center border-black/50 rounded-full'>
                            <img src={dataAdmin.image} alt="" />
                        </div>
                        <h1 className='mt-1 font-semibold'>{dataAdmin.firstName} {dataAdmin.maidenName} {dataAdmin.lastName}</h1>
                        <p></p>
    
                    </div>
                    <div className='flex items-center rounded-full size-[30px] justify-center overflow-hidden border-2 border-black/50 '>
                        <FaX onClick={closeShow}/>
                    </div>
                    
                </div>

                <ul className='mt-8 space-y-5 '>
                    {

                        data.map((a, i) => (
                            <li key={i} className={`flex items-center gap-2 ${link == a.href?'gradientNav':''}`}><span className='text-xl'>{a.ic}</span> <Link to={a.href} className='text-xl'>{a.nama}</Link></li>
                        ))
                    }
                </ul>

            </div>

            <div className='w-[25%] backdrop-sepia-0  bg-blue-200/30'>
            
            </div>

        </div>
    )
}

export default ListNav
