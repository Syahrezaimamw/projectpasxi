export const getLogin = async (dataInput,callback,load) =>{
    load(true)
    return await fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
        const data = res.users
        const proses = data.find((e) => e.email == dataInput.email && e.password == dataInput.password)

        if (proses != undefined) {
            callback()
        } else {
            setTimeout(()=>{
                load(false)
            },1000)
        }
        return proses
    })

}