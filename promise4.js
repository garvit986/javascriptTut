const fetchWithRetry = async(url, tries) =>{
    try {
        const response = await fetch(url)
        if(response) return await console.log(response.json)
    } catch (error) {
        if(tries>0){
            console.log(`Retrying with ${tries} left`)
            return fetchWithRetry(url, tries-1)
        }
        else return console.log("Failed to Fetch data")
    }
}
return fetchWithRetry("https://fakesoreapi.com/products/1",5)