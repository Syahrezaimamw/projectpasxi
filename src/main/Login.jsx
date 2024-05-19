import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import ButtonLogin from '../components/ButtonLogin';
import travel from '../images/travel.png'
import { getLogin } from '../service/getapi';
import Laodlogin from '../components/Laodlogin';



const Login = () => {
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const [loadingIn, setLoadingIn] = useState(false)
    const [noTerdaftar, setNoterdatar] = useState(false)
    const [loadingOut, setLoadingOut] = useState(false)
    const [visible, setVisible] = useState(false)
    const [dataInput, setDatainput] = useState({
        email: '',
        password: ''
    })

    //reset input
    function resetInput() {
        emailref.current.value = ''
        passwordref.current.value = ''

    }
    //show hide password
    function handleShowpassword() {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)

        }, 500)
    }

    //proses menamoung data input
    function handleChange(e) {
        const newData = { ...dataInput }
        newData[e.target.id] = e.target.value
        setDatainput(newData)
    }

    //submit untuk menjalakan fnc validasi
    function submit(e) {
        e.preventDefault()
        validasi()
    }
    //proses memvalidasi input login
    async function validasi() {
        setLoadingIn(true)
        getLogin(dataInput, () => {
            localStorage.setItem('statusLogin', true)
            setTimeout(() => {
                resetInput()
                window.location.href = '/projectpasxi/home'
                setLoadingIn(false)
            }, 2000)
        }, () => {
            setLoadingIn(false)
            setNoterdatar(true)
        })
    }

    //proses logout
    function handleLogout() {
        setLoadingOut(true)
        setTimeout(() => {
            resetInput()
            localStorage.removeItem('statusLogin')
            setLoadingOut(false)
        }, 2000)
    }
    return (
        <div className='relative '>
            <div className='flex bg-[#3F7539]  text-white py-4 text-2xl font-bold items-center justify-center md:hidden'>
                <h1>LOGO</h1>
            </div>
            <div className='z-10 flex flex-col-reverse justify-between md:flex-row wrapper2'>
                <div className='w-full md:w-[40%] bg-white dark:bg-white px-5 sm:px-5  lg:px-5 xl:px-0 flex flex-col items-center justify-center md:min-h-[100vh]  h-full'>
                    <div className='w-full md:w-[78%]'>
                        <h1 className=' hidden md:block text-3xl font-bold text-[#355B3E]'>LOGO</h1>
                        <h1 className='mt-7 md:mt-10 text-[20px] md:text-2xl font-semibold text-[#355B3E]'>Artificial Intelligence giving you travel recommendations</h1>
                        <p className='mt-3 text-[#58745E]'>Welcome Back, Please login to your account</p>
                        <form action="" className='mt-4'>
                            <label htmlFor="email" className='text-[#2F3D4C] font-medium' >Email</label>
                            <div className='flex items-center w-full mt-1 mb-4 overflow-hidden bg-white rounded-md bx'>
                                <input type="text" onChange={(e) => handleChange(e)} id='email' ref={emailref} placeholder='masukan email' className='w-full py-[8px] bg-white dark:bg-white outline-none ps-2' />
                            </div>
                            <label htmlFor="password" className='text-[#2F3D4C] font-medium' >Password</label>
                            <div className='flex items-center mt-1 mb-4 overflow-hidden bg-white rounded-md justify-betweenll just bx'>
                                <input ref={passwordref} type={visible ? "text" : "password"} onChange={(e) => handleChange(e)} id='password' placeholder='masukan password' className='w-[90%] bg-white dark:bg-white py-[8px] outline-none ms-2' />
                                {
                                    visible ?
                                        <FaEyeSlash className='text-[#2F3D4C]' onClick={handleShowpassword} />
                                        :
                                        <FaEye className='text-[#2F3D4C]' onClick={handleShowpassword} />

                                }
                            </div>




                        </form>
                        {noTerdaftar ? <p className='mb-2 text-[15px] text-red-500'>Akun tidak terdaftar</p>
                            : <></>}
                        <div className='w-full h-[1px] bg-[#355B3E]'></div>
                        <div className='flex justify-between mt-3'>
                            <ButtonLogin type={true} onClick={submit}>{loadingIn ? <Laodlogin /> : 'Login'}</ButtonLogin>
                            <ButtonLogin onClick={handleLogout}>{loadingOut ? <Laodlogin /> : 'Log Out'}</ButtonLogin>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[60%] md:min-h-[100vh] px-[60px] py-5 bg-[#F5DBC4] flex justify-center items-center h-full'>
                    <img src={travel} alt="" className='img-fluid' />
                </div>

            </div>
        </div>
    )
}

export default Login
