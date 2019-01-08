const http =require('http')
const url = process.argv[2]
let sum=""
http.get(url,callback=(responce)=>{

    responce.setEncoding('utf8')
    responce.on("data",(data)=>{
        sum=sum+data
    })
    responce.on("end",()=>{
        console.log(sum.length)
        console.log(sum)
    })
})