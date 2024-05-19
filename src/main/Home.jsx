import React, { useState } from 'react'

import Notacces from '../components/Notacces'
const Home = () => {
  const [status,setStatus]=useState(localStorage.statusLogin ?localStorage.getItem('statusLogin') : false )
// const statusLogin=localStorage.getItem('statusLogin')

  return (
   <div>{status?<div>halaman home</div>:<Notacces/>}</div>
  )
}

export default Home
