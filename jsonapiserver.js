const http = require('http')
const url = require('url')
const moment = require('moment')
const port = process.argv[2]
const server = http.createServer((request, result) => {
    const { pathname, query } = url.parse(request.url, true)
    result.writeHead(200, { 'Content-Type': 'application/json' })
    if (pathname === '/api/parsetime') {
        return result.end(JSON.stringify({
            hour: moment(query.iso).hour(),
            minute: moment(query.iso).minute(),
            second: moment(query.iso).second()
        }))
    }
    if (pathname === '/api/unixtime') {
        return result.end(JSON.stringify({
            unixtime: Number(moment(query.iso).format("x"))
        }))
    }
    result.writeHead(404, { "Conten-Type": "application/json" })
    
})
server.listen(port)