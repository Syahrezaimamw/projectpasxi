import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Notacces from '../components/Notacces'
import { getDataVila } from '../service/getapi'
const Home = () => {
  const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)
  // const statusLogin=localStorage.getItem('statusLogin')
  const [dataVila,setDataVila]=useState([])

  useEffect(()=>{
    getDataVila().then(a=>setDataVila(a))
  },[])
console.log(dataVila)
  return (
    <div className='overflow-x-hidden'>{status ?
      <div>
        <Navbar link={'/home'}/>
        <div className='h-[200vh] flex gap-3 pt-[180px] wrapper'>
         {/* {
          dataVila.map((a,i)=>(
            <div key={i} className='w-[200px] p-2 h-[150px] border-2 border-black'>
              <img src={a.gambar} alt="" className='w-[50px]' />
              <h1>{a.namaVila}</h1>
              <h1>{a.deskripsi.substring(0,15)}..</h1>
              <p className='text-end'>{a.alamat.substring(0,10)}...</p>
            </div>
          ))
         } */}
        </div>
      </div>
      : <Notacces />}</div>
  )
}

export default Home
