import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({ nama, desk, id, harga, status, alamat }) => {
  return (
    <div className='bg-white flex w-[400px] border border-gray-200 shadow rounded-lg overflow-hidden h-[200px]'>
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
    </div>

  )
}

{/* <div
href="#"
className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[400px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
<div className='h-[200px] bg-red-200 w-[400px] overflow-hidden'>

  <img
    className=" h-[200px] rounded-t-lg ps-4 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src="https://source.unsplash.com/random/300×300"
    alt=""
  />
</div>
<div className="flex flex-col justify-between p-3 leading-normal bg-red-900">
  <div>

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <Link to={`/vila/${id}`}>
        {nama}
      </Link>
    </h5>
    <p></p>
    <p className="mb-1 font-normal dark:text-gray-400">
      {desk}
      Here are the biggest enterprise
    </p>
    <p className='text-gray-700'>{alamat}</p>

  </div>
  
  <p className='flex justify-between w-full'>
    <span>

      {new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(harga)}
    </span>
    <span>
      {status ? 'full' : 'kosong'}
    </span>
  </p>
</div>
</div> */}
export default Card
