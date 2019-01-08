const http =require('http')
const url = process.argv[2]
http.get(url,callback=(responce)=>{
    responce.setEncoding('utf8')
    responce.on("data",callback=(data)=>{console.log(data)})
})