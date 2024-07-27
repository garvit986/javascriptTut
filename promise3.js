console.log("Program Started")

const promise = new Promise((res,rej)=>{

    console.log("Program in Progress")
    setTimeout(() => {
        res(
            new Promise((res,rej)=>{
                setTimeout(() => {
                    res(
                        new Promise((res,rej)=>{
                            setTimeout(() => {
                                res("Second Chain Complete")
                            }, 10000);
                        })
                    )
                    console.log("First Chain Complete")
                }, 2000);
            })
        )
        console.log({ data: "Hello, friend!", error: null })
    }, 5000);
})

console.log(promise)

promise
.then((message)=>{
    console.log(message)
    console.log("Program Complete")
})