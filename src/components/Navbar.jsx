import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import ListNav from './ListNav';
import Btn from './Btn';
const Navbar = ({ link }) => {
    const [showMobile, setShowmobile] = useState(false)

    const data = [
        {
            nama: 'Home',
            href: '/home'
        },
        {
            nama: 'Kelola Villa',
            href: '/vila'
        },
        {
            nama: 'Kelola Denda',
            href: '/Denda'
        },
        {
            nama: 'Kelola Catering',
            href: '/Catering'
        },
        {
            nama: 'Laporan',
            href: '/Laporan'
        },
       
    ]

    function handleShowMobile() {
        !showMobile ? setShowmobile(true) : setShowmobile(false)
    }

    // console.log(showMobile)
    return (
        <>
            <div className='fixed w-full bg-white bx'>
                <div className='z-10 flex items-center justify-between py-4 pb-5 m-auto wrapper'>
                    <h1 className='text-3xl font-semibold'>Villa-In</h1>
                    <ul className='items-center hidden gap-8 md:flex '>
                        {
                            data.map((a, i) => (
                                <li key={i} className='relative font-semibold group'><Link to={a.href}>{a.nama}</Link>
                                    <span className={`absolute w-full h-[2px] ${link == a.href ? 'bg-red-900' : ''} group-hover:bg-red-900 left-0 -bottom-[6px]`}></span>
                                </li>
                            ))
                        }
                    </ul>


                    <FaBars className='md:hidden' onClick={handleShowMobile} />
                    <Btn>Login</Btn>
                </div>

            </div>
            <ListNav show={showMobile} link={link} setShow={setShowmobile} />
        </>
    )
}

export default Navbar
