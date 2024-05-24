import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BarsM } from '../lock/lok'
const Card = ({ nama, desk, id, harga, status, alamat }) => {
  const {sideShowM,setSideShowM}=useContext(BarsM)
  return (
    <div className={`bg-white flex flex-col ${sideShowM ? 'xl:w-[22.35%] lg:w-[29.35%] md:w-[46%]  w-[100%]':'xl:w-[22.44%]  lg:w-[29.7%] md:w-[29.8%]  w-[100%]'}   border border-gray-200 shadow rounded-lg overflow-hidden `}>
      <div className='w-full h-[170px] bg-gray-200'>
        
      </div>
      <div className='flex flex-col justify-between w-full py-3 pb-4 pe-7 text-wrap-gray-900 text ms-3'>
        <div>

        <h1 className='text-2xl font-semibold'>
        <Link to={`/vila/${id}`}>
        {nama}
      </Link>
        </h1>
        <p className='flex flex-wrap mt-1 font-semibold text-wrap' >
          {desk.substring(0,30)}
          ...
        </p>
        <p className='font-semibold ' >{alamat}</p>
        </div>
        <div className='flex justify-between w-full mt-2'>
          <p className='font-semibold'>{new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(harga)}</p>
          {status?
          
          <p className='font-semibold text-green-700'>Full</p>
          :
          <p className='font-semibold text-red-700'>Kosong</p>
        }
        </div>
      </div>
    </div>

  )
}

{/* <div className='bg-white flex w-[400px] border border-gray-200 shadow rounded-lg overflow-hidden h-[200px]'>
<div className='h-full w-[155px] bg-gray-500'>
  
</div>
<div className='flex flex-col w-[205px] justify-between py-3 pb-4 text-wrap-gray-900 text ms-3'>
  <div>

  <h1 className='text-2xl font-semibold'>
  <Link to={`/vila/${id}`}>
  {nama}
</Link>
  </h1>
  <p className='flex flex-wrap mt-1 font-semibold text-wrap' >
    {desk.substring(0,30)}
    ...
  </p>
  <p className='mt-2 font-semibold' >{alamat}</p>
  </div>
  <div className='flex justify-between w-full'>
    <p className='font-semibold'>{new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
}).format(harga)}</p>
    {status?
    
    <p className='font-semibold text-green-700'>Full</p>
    :
    <p className='font-semibold text-red-700'>Kosong</p>
  }
  </div>
</div>
</div> */}
export default Card
