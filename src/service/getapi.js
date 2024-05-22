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
export const getDataVila = async() =>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila')
    .then(a=>a.json())
    .then(a=>a)
    .catch(err=>console.log(err))
    
}

//get id data vila
export const getIdDataVila = async(id) =>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila/'+id)
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