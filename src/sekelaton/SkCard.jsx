import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BarsM } from '../lock/lok'
import { useContext } from 'react'
const SkCard = () => {
  const {sideShowM,setSideShowM}=useContext(BarsM)

  return (
    <div className={` ${sideShowM ? 'xl:w-[22.35%] lg:w-[29.35%] md:w-[46%]  w-[100%]':'xl:w-[22.44%]  lg:w-[29.7%] md:w-[29.8%]  w-[100%]'}  bg flex gap-4 flex-col `}>
      <div className='w-full h-[200px] rounded-lg overflow-hidden'>
        
      <Skeleton  className='w-full h-full rounded-xl'/> 
      </div>
      <div className='w-full'>
      <Skeleton  className='h-[25px]'/>
      <Skeleton  className='h-[20px]'/>
      <Skeleton  className='h-[20px]'/>
      <Skeleton  className='h-[20px] mt-2'/>
        
      </div>
      {/* <div className='w-full h-[200px]'>

      </div>
      <div className='w-[220px] flex flex-col justify-between'>
        <div className='w-full'>

        
      <Skeleton  className='h-[15px] mt-5'/>
      <Skeleton  className='h-[15px]'/>
      <Skeleton  className='h-[20px] mt-3'/>
        </div>
      <Skeleton  className='h-[30px] '/>
      </div> */}
    </div>
  )
}

export default SkCard
