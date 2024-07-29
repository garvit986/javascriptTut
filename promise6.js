const urls = ['https://fakestoreapi.com/products/1', "https://fakesoreapi.com/products/2" ,"https://fakestoreapi.com/products/3"]

const fetchurls = urls.map(url=>fetch(url).then(res=>res.json()))

Promise.allSettled(fetchurls).then(response=>{
    const responseData = response.map(response => console.log(response))
})
.catch(error=> console.log(error))


// const urls = ['https://fakestoreapi.com/products/1', "https://fakesoreapi.com/products/2" ,"https://fakestoreapi.com/products/3"]

// const fetchurls = urls.map(url=>fetch(url).then(res=>res.json()))

// Promise.allSettled(fetchurls).then(response=>{
//     const responseData = response.map(response => response)
//     console.log(responseData)
// })
// .catch(error=> console.log(error))

