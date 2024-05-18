import React from 'react'

const ButtonLogin = ({children,type,onClick}) => {
  return (
  <button onClick={(e)=>onClick(e)} className={`${type?'bg-[#355B3E] text-white':'bg-white text-[#355B3E] '} border-2 border-[#355B3E] w-[47%] font-semibold rounded-md py-[8px]`}>{children}</button>
  )
}

export default ButtonLogin
