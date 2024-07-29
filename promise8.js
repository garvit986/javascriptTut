const urls = ['https://fakestoreapi.com/products/1', "https://fakesoreapi.com/products/2" ,"https://fakestoreapi.com/products/3"]

const fetchAnyWithErrors = (urls) =>{
    const fetchurls = urls.map(url=>fetch(url).then(res=>res.json()).catch(error=>console.log(error)))

    return Promise.any(fetchurls).then(response=>console.log(response))
    .catch((error)=>{
        throw new Error(error)
    })
}

fetchAnyWithErrors(urls)