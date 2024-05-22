import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Notacces from '../components/Notacces'
import { getDataVila } from '../service/getapi'
import Card from '../components/Card'
import Modaladd from '../modal/Modaladd'
// import SkCard from '../sekelaton/SkCard'
// import Skeleton from '@mui/material/Skeleton';
// import Skeleton from '@mui/material/Skeleton'; 
const Pagevila = () => {
  const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)
  const [dataVila, setDataVila] = useState([])
  const [modal, setMl] = useState(false)
  useEffect(() => {
    getDataVila().then(data => setDataVila(data))
  }, [])
  return (
    <div className='overflow-x-hidden'>{status ?
      <div>
        <Navbar link='/vila' />
        <div className='flex  flex-wrap items-start justify-start gap-10 pt-[120px] wrapper'>
          <div className='flex justify-end w-full'>
            <button onClick={() => setMl(true)} className='active:scale-95 border-2 px-4 py-1 rounded-md border-[#355B3E] text-[#355B3E] font-semibold '>Add Data VIla</button>
          </div>
          {/* <SkCard/> */}
          {/* <Skeleton variant="circular" width={40} height={40} /> */}
          {
            dataVila.map((a, i) => (
              <Card key={i} nama={a.namaVila} harga={a.harga} desk={a.deskripsi} id={a.idVila} alamat={a.alamat} status={a.status} />
            ))
          }
        </div>
        <Modaladd show={modal} setMl={setMl} />
      </div>
      : <Notacces />}</div>
  )
}

export default Pagevila
