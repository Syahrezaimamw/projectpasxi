import React, { useEffect, useState,useContext } from 'react'
import Navbar from '../components/Navbar'
import Notacces from '../components/Notacces'
import { getDataVila } from '../service/getapi'
import Sidebar from '../components/Sidebar'
import Navdash from '../components/Navdash'
import ListNav from '../components/ListNav'
import { BarsM } from '../lock/lok'
import TemplateSide from '../dashboard/TemplateSide'
const Home = () => {
  const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)
  // const statusLogin=localStorage.getItem('statusLogin')
  const [dataVila, setDataVila] = useState([])
  const {sideShowM,setSideShowM}=useContext(BarsM)

  const [show,setShow]=useState(true)
  useEffect(() => {
    getDataVila().then(a => setDataVila(a))
  }, [])
  return (
  <TemplateSide>
    
  </TemplateSide>
  )
}

export default Home
