const http = require('http')
const map = require('through2-map')
const arr = process.argv[2]
const server = http.createServer((request, result) => {
    if (request.method !== "POST") return result.end("noooooooooo! only PoSt method")
    request.pipe(map(chunk => { return chunk.toString().toUpperCase() })).pipe(result)
})
server.listen(arr)