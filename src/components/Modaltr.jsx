import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import moment from 'moment';
import Input from './Input';
// import Select
import Select from 'react-select'
import {

  postDataTs
} from '../service/postapi'
import { deletePenyewa } from '../service/deleteapi';
import { getDataCatering, getDataNamaLaporan, getIdDataVila } from '../service/getapi';
import { updateVila } from '../service/put';
import Loading from './Loading';
import Inputstatic from './Inputstatic';
const Modaltr = ({ modalTr, setModalTr, idVila, hargavila, idPenyewa,namaVila,namaPenyewaa }) => {
  //food
  const [idFood,setidf]=useState(0)
  const [food, setDataFood] = useState([])
  const [inputfood, setinputFood] = useState('')
  const [conditionfood,setConditionFood]=useState(true)

  //total harga
  const [s, setselisih] = useState(0)
  const [hargaf,setHargaf]=useState(0)

  //loadingButton
  const [loadingNext, setLoadingNext] = useState(false)
  const [loadingCLose, setLoadingClose] = useState(false)

  
  //data
  const [dataPer, setDataPer] = useState()
  const [dataInput, setDataInput] = useState({
    idVila: idVila,
    idPenyewa: idPenyewa,
    namaLaporan:`Laporan ${namaVila}, Atas Nama ${namaPenyewaa}`,
    tanggalmasuk: '',
    tanggalkeluar: '',
    jumlahDenda: 0,
    KeteranganDenda: [],
    idAdmin:1
  })

  useEffect(() => {
    getIdDataVila(idVila).then((a) => setDataPer(a))
  }, [])

  function handleChangefilter(e) {
    setinputFood(e.target.value)
  }
  useEffect(() => {
    getDataCatering(inputfood).then(res => setDataFood(res))
  }, [inputfood])

  //fungsi input
  function handleChange(e) {
    const newData = { ...dataInput }
    newData[e.target.id] = e.target.value
    setDataInput(newData)


  }

  //hitung selisih
  function jumlhtotal() {
    var tanggals = moment(dataInput.tanggalmasuk);
    var tanggalo = moment(dataInput.tanggalkeluar);
    return tanggalo.diff(tanggals, 'days') // 1

  }
  
  //fungsi proses selisih
  useEffect(() => {
    if (dataInput.tanggalmasuk != '' && dataInput.tanggalkeluar != '') {
      setselisih(

        jumlhtotal() * hargavila
      )
      setHargaf(
        jumlhtotal() * hargaf
        
      )
    }
  }, [dataInput,inputfood])

  //add Data Transaksi
  function handleSubmit(e) {
    e.preventDefault()
    setLoadingNext(true)
    updateVila(dataPer, setModalTr, idVila, setLoadingNext)
    console.log(dataPer)
    postDataTs(dataInput, s, (a) => a,idFood,hargaf)

  }

  //close Modal
  function handleClose() {
    deletePenyewa(idPenyewa, setModalTr, setLoadingClose)
  }

  function handleSelectfood(data,harga,id){
    setinputFood(data)
    setConditionFood(false)
    setHargaf(harga)
    setidf(id)
    
  }


  return (
    <div>
      <>
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={`${modalTr ? 'flex' : "hidden"} bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-[60%] max-h-full p-4">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Buat data chek in
                </h3>

              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                  <div className='flex justify-between w-full'>

                    <div className='w-[49%]'>

                      <Input
                        onChange={(e) => handleChange(e)}
                        id='tanggalmasuk'
                        place='Tanggal Checkin'
                        type="date"
                      ></Input>
                    </div>
                    <div className='w-[49%]'>

                      <Input
                        onChange={(e) => handleChange(e)}
                        id='tanggalkeluar'
                        place='Tanggal Checkout'
                        type="date"
                      ></Input>
                    </div>
                  </div>
                  <div className='relative w-full'>
                    <label
                      htmlFor="noKtp"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pilih Menu Catering
                    </label>
                    <input
                      onChange={(e) => handleChangefilter(e)}
                      

                      type="teks"
                      name="email"
                      id="jumlahDenda"
                      value={inputfood}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                      placeholder="cari menu catering"
                      required=""
                    />
                    {
                      inputfood.length > 0 ?
                        <div className={`${conditionfood?'flex':'hidden'}  w-full absolute left-0 bottom-[-155px]   overflow-y-scroll rounded-md  h-[150px] bg-white shadow-xl p-4`}>
                          <div className='w-full space-y-3 '>
                          {food.map((e,i)=>(
                            <div key={i}  onClick={()=>handleSelectfood(e.namaPaket,e.harga,e.idCatering)} className='flex items-center justify-between w-full px-2 py-2 border-2 border-gray-400 rounded-md '>
                              <div>{e.namaPaket}</div>
                              <div>{e.gambarPaket}</div>
                              <div>{e.harga}</div>
                            </div>
                            ))}
                          </div>

                        </div> : <></>
                    }
                  </div>

                  <div className='flex justify-between '>
                    <div className='w-[49%]'>
                      <Inputstatic
                        jumlahharga={s}
                        nama='Total Harga Sewa'
                        handleChange={handleChange}
                      />
                    </div>
                    <div className='w-[49%]'>
                      <Inputstatic
                        jumlahharga={hargaf}
                        nama='Total Harga Catering'
                        handleChange={handleChange}
                      />
                    </div>

                  </div>


                  <div className='flex items-center justify-end gap-3'>
                    <button onClick={() => handleClose()} className='px-5 py-1 border-2  border-[#355B3E] text-[#355B3E] font-semibold '>{loadingCLose ? <Loading /> : 'Close'}</button>
                    <button onClick={(e) => handleSubmit(e)} className='px-5 border-2  border-[#355B3E] py-1 bg-[#355B3E] text-white font-semibold'>{loadingNext ? <Loading /> : 'Add'}</button>

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

export default Modaltr
