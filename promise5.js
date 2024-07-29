// const fetchWithTimeout = async(url,timeout) =>{
//     try {
//             const promise = new Promise((res,rej)=>{
//             setTimeout(async() => {
//                 const response  = await fetch(url)
//             }, timeout);
//             if(response) res(response.json())
//             else rej("Time limit exceeded")
//         })
//         }
//      catch (error) {
//         console.log(error)
//     }


//     promise.then((message)=>{
//         console.log(message)
//     })
// }

// fetchWithTimeout("https://fakestoreapi.com/products/1",200000)


const fetchWithTimeout= (url, timeout) =>{
    const timeoutPromise = new Promise((_,rej)=>{
        setTimeout(() => {
            rej("Took more time to fetch data")
        }, timeout);
    })

    const fetchPromise = fetch(url).then(response=>{
        if(!response.ok) throw new Error("Network request no ok")
        return response.json()
    })
    
    return Promise.race([fetchPromise, timeoutPromise])
}

fetchWithTimeout("https://fakestoreapi.com/products/1", 2000).then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})