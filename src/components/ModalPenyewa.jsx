import React, { useState } from 'react'
import { postDataPenyewa } from '../service/postapi'
import Input from './Input'
import Loading from './Loading'

const ModalPenyewa = ({ show, setShow, setModalTr, setIdPenyewa }) => {
    const [dataInput, setDataInput] = useState([])
    const [loadingNext, setLoadingNext] = useState(false)
    const [loadingClose, setLoadingClose] = useState(false)


    //isi input
    function handleChange(e) {
        const newData = { ...dataInput }
        newData[e.target.id] = e.target.value
        setDataInput(newData)

    }

    //add data penyewa
    function handleSubmit(e) {
        e.preventDefault()
        setLoadingNext(true)
        postDataPenyewa(dataInput, (idPenyewa) => {
            setIdPenyewa(idPenyewa)
            setModalTr(true)
            setShow(false)
            setLoadingNext(false)
        })

    }

    function handleClose(){
        setShow(false)
    }

    return (
        <>

            <div
                id="authentication-modal"
                tabIndex={-1}
                aria-hidden="true"
                className={`${show ? 'flex' : 'hidden'} bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative w-full max-w-md max-h-full p-4">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Masukan Data Penyewa
                            </h3>

                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#">
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    id='nama'
                                    place='Nama Penyewa'
                                    type={'teks'}
                                />
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    id='noTlp'
                                    type={'number'}

                                    place='Nomer Telephone'
                                />
                                <Input
                                    onChange={(e) => handleChange(e)}
                                    id='noKtp'
                                    type={'number'}

                                    place='Nomer KTP'
                                />


                                <div className='flex items-center justify-end gap-2 mt-8'>
                                    <button onClick={() => handleClose()} className='px-5 py-1 border-2  border-[#355B3E] text-[#355B3E] font-semibold '>{
                                        loadingClose ? <Loading /> : 'close'
                                    }</button>
                                    <button onClick={(e) => handleSubmit(e)} className='px-5 border-2  border-[#355B3E] py-1 bg-[#355B3E] text-white font-semibold'>{
                                        loadingNext ? <Loading /> : 'Next'
                                    }</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalPenyewa
