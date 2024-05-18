import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataLok } from '../lock/lok'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import ButtonLogin from '../components/ButtonLogin';
import travel from '../images/travel.png'
const Login = () => {
    const lock = useContext(DataLok)
    const [visible, setVisible] = useState(false)
    const [hasilvalidasi, sethasilvalidasi] = useState()
    const [dataInput, setDatainput] = useState({
        email: '',
        password: ''
    })

    function handleShowpassword() {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)

        }, 500)
    }

    function handleChange(e) {
        const newData = { ...dataInput }
        newData[e.target.id] = e.target.value
        setDatainput(newData)
    }



    async function validasi() {
        await fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => {
                const data = res.users

                const proses = data.find((e) => e.email == dataInput.email && e.password == dataInput.password)
                if (proses != undefined) {
                    localStorage.setItem('statusLogin', true)
                    setTimeout(() => {

                        window.location.href = '/projectpasxi/home'
                    }, 500)
                } else {

                }
                return proses
            })

    }




    console.log(lock.lock)

    function submit(e) {
        e.preventDefault()
        validasi()
    }
    console.log(dataInput)


    return (
        <><div className='flex bg-[#3F7539] text-white py-4 text-2xl font-bold items-center justify-center md:hidden'>
            <h1>LOGO</h1>
            
        </div>
            <div className='flex flex-col-reverse justify-between md:flex-row wrapper2'>
                <div className='w-full md:w-[40%]  px-8 sm:px-5  lg:px-5 xl:px-0 flex flex-col items-center justify-center md:min-h-[100vh]  h-full'>
                    <div className='w-full md:w-[78%]'>
                        <h1 className=' hidden md:block text-3xl font-bold text-[#355B3E]'>LOGO</h1>
                        <h1 className='mt-10 text-[20px] md:text-2xl font-semibold text-[#355B3E]'>Artificial Intelligence giving you travel recommendations</h1>
                        <p className='mt-3 text-[#58745E]'>Welcome Back, Please login to your account</p>
                        <form action="" className='mt-4'>
                            <label htmlFor="email" className='text-[#2F3D4C] font-medium' >Email</label>
                            <div className='flex items-center w-full mt-1 mb-4 overflow-hidden rounded-md bx'>
                                <input type="text" onChange={(e) => handleChange(e)} id='email' placeholder='masukan email' className='w-full py-[8px] outline-none ms-2' />
                            </div>
                            <label htmlFor="password" className='text-[#2F3D4C] font-medium' >Password</label>
                            <div className='flex items-center mt-1 mb-4 overflow-hidden rounded-md justify-betweenll just bx'>
                                <input type={visible ? "text" : "password"} onChange={(e) => handleChange(e)} id='password' placeholder='masukan password' className='w-[90%] py-[8px] outline-none ms-2' />
                                {
                                    visible ?
                                        <FaEyeSlash className='text-[#2F3D4C]' onClick={handleShowpassword} />
                                        :
                                        <FaEye className='text-[#2F3D4C]' onClick={handleShowpassword} />

                                }
                            </div>




                        </form>
                        <div className='w-full h-[1px] bg-[#355B3E]'></div>
                        <div className='flex justify-between mt-3'>
                            <ButtonLogin type={true} onClick={submit}>Login</ButtonLogin>
                            <ButtonLogin onClick={() => localStorage.removeItem('statusLogin')}>Log out</ButtonLogin>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[60%] md:min-h-[100vh] px-[60px] py-5 bg-[#F5DBC4] flex justify-center items-center h-full'>
                    <img src={travel} alt="" className='img-fluid' />
                </div>

            </div>
        </>
    )
}

export default Login
