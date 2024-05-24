import React from 'react'
import { useState, useEffect } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Navbar from '../components/Navbar'
import Notacces from '../components/Notacces'
import { getDataVila, getDataVilaStatus } from '../service/getapi'
import Card from '../components/Card'
import Modaladd from '../modal/Modaladd'
import SkCard from '../sekelaton/SkCard'
import TemplateSide from '../dashboard/TemplateSide'
const Pagevila = () => {
  const [dataVila, setDataVila] = useState()
  const [input,setInput]=useState('')
  const [inputStatus,setInputStatus]=useState()
  const [modal, setMl] = useState(false)
  
  useEffect(() => {
    setInputStatus()
    setDataVila()
    getDataVila(input).then(data => setDataVila(data))
  }, [input])
  
  function handleChange(e){
    setInput(e)
  }

  function handleFull(){
    setInputStatus(true)
    setDataVila()
    getDataVilaStatus(true).then(data => setDataVila(data))
  }
  function handleKosong(){
    setInputStatus(false)
    setDataVila()
    getDataVilaStatus(false).then(data => setDataVila(data))
  }
  return (
    <TemplateSide link='/vila'>
      <div className='w-full'>

        <div className='w-full '>
          <div className='flex flex-col justify-between w-full gap-5 mt-10 md:flex-row '>
            <div className='flex items-center justify-between border-[#355B3E] rounded-full py-1 overflow-hidden px-3  border-2'>

            <input type="text" className='outline-none w-[90%]' onChange={(e)=>handleChange(e.target.value)}/>
            <FaMagnifyingGlass/>
            </div>
  
            <div className='flex items-end self-end gap-2'>

              <button className={`px-4 py-1 border-2 border-[#355B3E] rounded-md ${inputStatus == true ?'bg-[#355B3E] text-white':''}`} onClick={handleFull}>Full</button>
              <button className={`px-4 py-1 border-2 border-[#355B3E] rounded-md ${inputStatus == false ?'bg-[#355B3E] text-white':''}`} onClick={handleKosong}>Kosong</button>
            <button onClick={() => setMl(true)} className='active:scale-95 border-2 px-4 py-1 rounded-md border-[#355B3E] text-[#355B3E] font-semibold bg-white'>Add Data VIla</button>
            </div>
          </div>

          <div className='flex flex-wrap justify-start gap-[38px] mt-10 pb-8'>

            {
              dataVila ?
              dataVila.length > 0 ?
                dataVila.map((a, i) => (
                  <Card key={i} nama={a.namaVila} harga={a.harga} desk={a.deskripsi} id={a.idVila} alamat={a.alamat} status={a.status} />
                )): <div className='w-full h-[490px] flex items-center justify-center text-4xl text-gray-700 font-semibold '>Data Vila Tidak Tersedia</div> : [1, 2, 3, 4, 5, 6,7,8].map((a, i) => (
                  <SkCard key={a} />
                ))
            }
          </div>
          <Modaladd show={modal} setMl={setMl} />
        </div>

      </div>

    </TemplateSide>
  )
}




export default Pagevila
