const urls = ['https://fakestoreapi.com/products/1', "https://fakesoreapi.com/products/2" ,"https://fakestoreapi.com/products/3"]

const fetchWithRace = (urls,timeout) =>{
    const timeoutPromise = new Promise((_,rej)=>{
        setTimeout(() => {
            rej("ERror Fetching")
        }, timeout);
    })
    const fetchUrls = urls.map(url => fetch(url).then(res=> console.log(res.json())).catch(error=>console.log(error)))
    return Promise.race([fetchUrls, timeoutPromise])
}

fetchWithRace(urls, 3000)
.then(data=>console.log(data))
.catch(error=>console.log(error))


// Incorrect