console.log("Program Started");
const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise resolved after 3s")
    }, 3000)
    
    setTimeout(()=>{
        rej("Promise rejected after 2s")
    }, 2000)
    
    console.log("Program in Progress")
})

promise.then((message)=>{
    console.log(message)
    console.log("Program Complete")
})
.catch((error)=>{
    console.log(error)
    console.log("Program Failure")
})