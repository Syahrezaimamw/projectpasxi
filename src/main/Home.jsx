import React, { useState } from 'react'
import { DataLok } from '../lock/lok'
import { useContext } from 'react'
import { useEffect } from 'react'
const Home = () => {
  const [status,setStatus]=useState(localStorage.statusLogin ?localStorage.getItem('statusLogin') : false )
// const statusLogin=localStorage.getItem('statusLogin')

  return (
   <div>{status?<div>halaman err</div>:<div>tidak ada akses</div>}</div>
  )
}

export default Home
