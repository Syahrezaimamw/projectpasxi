export const deletePenyewa = async (id, setShow,show) => {
    show(true)
    // setShow(false)
    return await fetch('https://664b7d2535bbda10987d2056.mockapi.io/KelolaVila/penyewa/' + id, {
        method: 'DELETE',
    })
    .then(res => res.json()) // or res.json()
    .then(res => {
        setShow(false)
        show(false)
    }
)
}

//hapus data vila
export const deleteVila=async(id)=>{
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila'+id,{
        method: 'DELETE',
    })
    // .then(res => res.json()) // or res.json()
    .then(res => {
        window.location.href ='/projectpasxi/vila/'
        
    })
}
