import React, { useState } from 'react'
import Input from '../components/Input'
import Loading from '../components/Loading'
import { postDataVila } from '../service/postapi'
const Modaladd = ({ show, setMl }) => {
    const [loadingNext, setLoadingNext] = useState(false)
    const [loadingClose, setLoadingClose] = useState(false)
    const [dataInput, setDataInput] = useState({
        namaVila: '',
        harga: '',
        deskripsi: '',
        alamat: '',
        gambar: '',
        status: false
    })
    function handleChange(e) {
        const newData = { ...dataInput }
        newData[e.target.id] = e.target.value
        setDataInput(newData)
    }

    function handleSubmit(e) {
        setLoadingNext(true)
        postDataVila(dataInput, setLoadingNext, setMl)
    }
    function handleClose() {
        setMl(false)

    }



    return (
        <div>
            <>
                <div
                    id="authentication-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`${show ? 'flex' : "hidden"} bg-black/50 overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                >
                    <div className="relative w-full max-w-[50%] max-h-full p-4">
                        {/* Modal content */}
                        <div className="relative w-full bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Masukan data vila baru
                                </h3>

                            </div>
                            {/* Modal body */}
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" action="#">
                                    <div className='flex flex-wrap justify-between w-full'>
                                        <div className='w-[47%] space-y-3'>


                                            <Input
                                                onChange={(e) => handleChange(e)}
                                                id='namaVila'
                                                place=' Nama Vila'
                                                type="teks"
                                            ></Input>
                                            <Input
                                                onChange={(e) => handleChange(e)}
                                                id='gambar'
                                                place=' gambar Paket'
                                                type="teks"
                                            ></Input>
                                        </div>
                                        <div className='w-[47%] space-y-3'>

                                            <Input
                                                onChange={(e) => handleChange(e)}
                                                id='harga'
                                                place=' Harga sewa vila'
                                                type="number"
                                            ></Input>
                                            <Input
                                                onChange={(e) => handleChange(e)}
                                                id='alamat'
                                                place=' Alamat'
                                                type="teks"
                                            ></Input>
                                        </div>
                                        <div className='w-full mt-3 '>
                                            <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >Deskripsi</label>
                                            <textarea name="" id="deskripsi" onChange={(e) => handleChange(e)} className={`bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 `} placeholder='masukan deskripsi'></textarea>

                                        </div>

                                    </div>


                                    <div className='flex items-center justify-end gap-3'>
                                        <button onClick={() => handleClose()} className='px-5 py-1 border-2 active:scale-95 border-[#355B3E] text-[#355B3E] font-semibold '>{loadingClose ? <Loading /> : 'Close'}</button>
                                        <button onClick={(e) => handleSubmit(e)} className='px-5 border-2  border-[#355B3E] active:scale-95 py-1 bg-[#355B3E] text-white font-semibold'>{loadingNext ? <Loading /> : 'Add'}</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Modaladd
