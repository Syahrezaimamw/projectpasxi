import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIdDataVila } from '../service/getapi'
import ModalPenyewa from '../components/ModalPenyewa'
import Modaltr from '../components/Modaltr'
import Navbar from '../components/Navbar'
import { FaAngleRight } from "react-icons/fa6";
import Notacces from '../components/Notacces'
import Btn from '../components/Btn'
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
const PerVila = () => {
    const [status, setStatus] = useState(localStorage.statusLogin ? localStorage.getItem('statusLogin') : false)
    const { id } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        getIdDataVila(id).then((a) => setData(a))

    }, [])
    const [showModalP, setModalP] = useState(false)
    const [modalTr, setModalTr] = useState(false)
    const [idPenyewa, setIdPenyewa] = useState()
    function handleShowM() {
        !showModalP ? setModalP(true) : setModalP(false)
    }

    function deleteVila(){
        deleteVila(data.idVila)
    }
    return (
        <div>
            {status ?
                <div>
                    <Navbar link='/vila' />
                    <div className='m-auto pt-[130px] max-w-7xl'>
                        <p className='flex items-center gap-2'>
                            <span>Home</span>
                            <FaAngleRight className='text-[15px]' />
                            <span>Vila</span>
                            <FaAngleRight className='text-[15px]' />
                            <span>{data ? data.namaVila : 'vila'}</span>
                        </p>
                        <div className='flex w-full mt-[50px] gap-7 '>
                            <div className='w-[430px] rounded-xl h-[400px] bg-gray-200'></div>
                            <div className='w-[calc(100%-430px)] ms-1 flex flex-col justify-between h-[400px] '>
                                <div>

                                    <h1 className='text-6xl font-bold text-black/80'  >{data ? data.namaVila : '...'}</h1>
                                    <p className='mt-3 text-2xl font-semibold text-black/80' >{data ? new Intl.NumberFormat('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR',
                                    }).format(data.harga) : '00'}</p>
                                    <p className='mt-2'>{data ? data.alamat : '..'}</p>                                <p className='mt-1'>{data ? data.status ? 'full' : 'Available' : '...'}</p>
                                    <h1 className='text-wrap w-[93%] mt-2'>{data ? data.deskripsi : '...'} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, itaque atque! Accusantium quo, voluptates nobis dolorum nulla cum eaque consectetur et ut nesciunt tempore officia. Provident cum placeat accusantium praesentium!</h1>
                                </div>
                                <div className='flex items-end justify-between w-full me-2'>
                                    <div className='flex gap-5 mb-3 text-xl text-gray-500 '>
                                    <p className='px-4 py-3 font-semibold text-white rounded-md bg-red-800/70 ' onClick={deleteVila}>
                                        <FaTrash/>
                                    </p>
                                    <p className='px-4 py-3 font-semibold text-white rounded-md bg-blue-600/70 '>
                                    <FaPen/>
                                    </p>
                                    </div>
                                    <div>

                                    {data ? data.status ? <button className='px-8 py-2 font-semibold text-white bg-gray-500 rounded-md'>Chek Out</button> : <Btn fc={handleShowM}>Add Customer</Btn>
                                        : <></>}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalPenyewa show={showModalP} setShow={setModalP} setIdPenyewa={setIdPenyewa} setModalTr={setModalTr} />
                    {idPenyewa ?

                        <Modaltr modalTr={modalTr} setModalTr={setModalTr} idVila={id} hargavila={data.harga} idPenyewa={idPenyewa} />
                        : <></>
                    }

                </div>
                : <Notacces />}
        </div>
    )
}

export default PerVila
