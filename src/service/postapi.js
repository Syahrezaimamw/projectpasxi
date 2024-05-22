//post data penyewa
export const postDataPenyewa = async (data,callback) => {
    return await fetch('https://664b7d2535bbda10987d2056.mockapi.io/KelolaVila/penyewa', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    )
        .then(res => res.json())
        .then(a => callback(a.idPenyewa))
        .catch(err => console.log(err));
}


export const postDataTs = async (data,total,callback,idFood,totalCatering) => {
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/transaksi', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            idVila: data.idVila,
            idPenyewa: data.idPenyewa,
            idCatering:idFood,
            hargaCatering:totalCatering,
            tanggalmasuk: data.tanggalmasuk,
            tanggalkeluar: data.tanggalkeluar,
            hargaDenda: 0,
            KeteranganDenda: [],
            total:total,

        })
    }
    )
        .then(res => res.json())
        .then(a => callback(a))
        .catch(err => console.log(err));
}



export const postDataVila=async(data,setShow,setModal)=>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, body: JSON.stringify(data)
    }
)
.then(res => {
        setShow(false)
        setModal(false)
        // window.location.href = '/projectpasxi/vila/'
      
    })
    .catch(err =>{
        setModal(false)
        setShow(false)
        
    });
}