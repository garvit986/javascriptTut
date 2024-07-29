const urls = ['https://fakestoreapi.com/products/1', "https://fakesoreapi.com/products/2" ,"https://fakestoreapi.com/products/3"]
const resp =[]
const fetchSequentially = async(urls) =>{
    // const fetchurls = urls.map(url=>fetch(url).then(res=>resp.push(res)).catch(err=>err))
    // return fetchurls
    for(const url of urls){
        try {
            const fetchurl = await (await fetch(url)).json()
            resp.push(fetchurl)
        } catch (error) {
            resp.push(error)
        }
    }
    return resp
}

fetchSequentially(urls).
then(data=> console.log(data))
.catch(err=> console.log(err))