import React from 'react'

const Btn = ({children,fc}) => {
    // console.log(fc)
  return (
    <button onClick={fc} className='bg-[#355B3E] md:flex hidden  text-white px-8 py-2 font-semibold rounded-sm'>{children}</button>

  )
}

export default Btn
