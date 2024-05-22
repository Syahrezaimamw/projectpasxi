import React from 'react'
import { useState } from 'react'
import Notacces from '../components/Notacces'
import Navbar from '../components/Navbar'

const Laporan = () => {
    const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)

  return (
    <div>
        {status?
    <div>
        <div>

        <Navbar link={'/Laporan'}/>
        <div className='wrapper pt-[110px]'>sss</div>
        </div>
    </div>:
    <Notacces/>    
    }
      
    </div>
  )
}

export default Laporan
