export const updateVila = async (data, show,id,showL) => {

    const dataBaru = {
        ...data, status: true
    }

    console.log(dataBaru)
    return await fetch('https://664b75e135bbda10987d06f3.mockapi.io/kelolaVila/vila/' + data.idVila, {
        method: 'PUT', // Method itself
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify(dataBaru) // We send data in JSON format
    })
        .then(response => response.json())
        .then(data => {
            show(false)
            showL(false)
            window.location.href='/projectpasxi/vila/'+id
        }) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err))
}