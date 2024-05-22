import React from 'react'

const Inputstatic = ({jumlahharga,nama,handleChange}) => {
  return (
    <div>
    <label
      htmlFor="total"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     {nama}
    </label>
    <input
      onChange={(e) => handleChange(e)}
      type="teks"
      name="email"
      id="total"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none"
      placeholder="name@company.com"
      required=""
      value={new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(jumlahharga)}
    />
  </div> 
  )
}

export default Inputstatic
