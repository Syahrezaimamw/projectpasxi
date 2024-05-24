//get data login
export const getLogin = async (dataInput,callback,load) =>{
    return await fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
        const data = res.users
        const proses = data.find((e) => e.email == dataInput.email && e.password == dataInput.password)

        if (proses != undefined) {
            callback(proses)
        } else {
            setTimeout(()=>{
                load()
            },1000)
        }
        return proses
    })

}

//get all data vila
export const getDataVila = async(data) =>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila')
    .then(a=>a.json())
    .then(res=>{
        const databaru=res.filter((e)=>e.namaVila.toLowerCase().includes(data))
        return databaru

    })
    .catch(err=>console.log(err))
    
}
export const getDataVilaStatus = async(data) =>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila')
    .then(a=>a.json())
    .then(res=>{
        const databaru=res.filter((e)=>e.status == data)
        return databaru

    })
    .catch(err=>console.log(err))
    
}

//get id data vila
export const getIdDataVila = async(id) =>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila/'+id)
    .then(a=>a.json())
    .then(a=>a)
    .catch(err=>console.log(err))

}



//transaksi
export const getTransaksi = async() =>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/transaksi')
    .then(a=>a.json())
    .then(a=>a)
    .catch(err=>console.log(err))
    
}

//penyewa
export const getIdDataPenyewa = async(id) =>{
    return await fetch('https://664b7d2535bbda10987d2056.mockapi.io/KelolaVila/penyewa/'+id)
    .then(a=>a.json())
    .then(a=>a)
    .catch(err=>console.log(err))

}

//getDataCatering 
export const getDataCatering=async(input)=>{
    return await fetch('https://664ccf8dede9a2b55651b871.mockapi.io/Kelolavila/dataCatering')
    .then(data=>data.json())
    .then((res)=>{
        const databaru=res.filter((e)=>e.namaPaket.toLowerCase().includes(input))
        return databaru
    })
}

export const getDataNamaLaporan=async(url,id,callback)=>{
    return await fetch(url+id)
    .then(res=>res.json())
    .then((res)=>{
        callback(res)
    })
}