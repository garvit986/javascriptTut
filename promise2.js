console.log("Program Started")

const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(
        new Promise((res,rej)=>{
            setTimeout(() => {
                res("Step 2 Complete")
            }, 3000);
        })
    )
    console.log("Step 1 Complete")
    },3000)

    console.log("Program in Progress")
})

promise
.then((message)=>{
    console.log(message)
    console.log("Program Complete")
})



{/* 2nd Method */}



// console.log("Program Started")

// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Step 1 Complete")
//     },3000)

//     console.log("Program in Progress")
// })

// promise
// .then((message)=>{
//     console.log(message)
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("Step 2 Complete")
//         }, 3000);
//     }).then((message)=>{
//         console.log(message)
//         console.log("Program Complete")
//     })
// })