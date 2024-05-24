import React, { useEffect, useState,useContext } from 'react'
import Navbar from '../components/Navbar'
import Notacces from '../components/Notacces'
import { getDataVila } from '../service/getapi'
import Sidebar from '../components/Sidebar'
import Navdash from '../components/Navdash'
import ListNav from '../components/ListNav'
import { AppSwicth } from '../lock/lok'
import { BarsM } from '../lock/lok'
const TemplateSide = ({link,children}) => {
    const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)
    // const statusLogin=localStorage.getItem('statusLogin')
    const {sideShowM,setSideShowM}=useContext(BarsM)
    const {switchh,setSwitch}=useContext(AppSwicth)
  
    const [show,setShow]=useState(true)
    // useEffect(() => {
    //   getDataVila().then(a => setDataVila(a))
    // }, [])
  return (
    <div className='overflow-x-hidden'>{status ?
        <div className='flex'>
          <Sidebar link={link} />
          <div className={`w-full min-h-[100vh] bg-neutral-100/20`}>
            <Navdash/>
            <div className={`m-auto mt-5   px-5 lg:px-[80px]  ${sideShowM?'max-w-[1255px]':'max-w-[1440px]'}`}> 
            {children}</div>
          </div>
            <ListNav show={sideShowM} link={'/home'} setShow={setSideShowM}/>
        </div>
        : <Notacces />}</div>
  )
}

export default TemplateSide
