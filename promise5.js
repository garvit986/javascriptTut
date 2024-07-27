const fetchWithTimeout = async(url,timeout) =>{
    try {
            const promise = new Promise((res,rej)=>{
            setTimeout(async() => {
                const response  = await fetch(url)
            }, timeout);
        }).then(()=>{
            res()
        })
    } catch (error) {
        
    }
    

    promise.then((message)=>{
        console.log(message)
    })
}

fetchWithTimeout("https://fakestoreapi.com/products/1",200000)