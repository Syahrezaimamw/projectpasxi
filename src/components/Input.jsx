import React from 'react'

const Input = ({id,place,onChange,type,desk}) => {
  return (
    <div>
    <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
        {place}
    </label>
    <input
        onChange={onChange}

        type={type}
        id={id}
        className={`bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 `}
        placeholder={'Masukan'+place}
        required=""
    />
</div>
  )
}

export default Input
