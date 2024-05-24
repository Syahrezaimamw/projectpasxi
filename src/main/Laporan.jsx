import React, { useEffect } from 'react'
import { useState } from 'react'
import Notacces from '../components/Notacces'
import Navbar from '../components/Navbar'
import { getTransaksi } from '../service/getapi'
import CardLaporan from '../components/CardLaporan'
import TemplateSide from '../dashboard/TemplateSide'

const Laporan = () => {
  const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)

  const [data, setData] = useState()
  useEffect(() => {
    getTransaksi().then(a => setData(a))
  }, [])

  return (
    <div>
      {status ?
        <TemplateSide link={'/laporan'}>




          <div className='flex flex-wrap justify-start w-full gap-5'>

            {data ?
              data.map((a, i) => (
                <CardLaporan key={i} data={a} />
              )) : <></>
            }
          </div>


        </TemplateSide>
        :
        <Notacces />
      }

    </div>
  )
}

export default Laporan
