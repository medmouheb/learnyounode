const net = require('net')
const moment = require('moment')
const arr=process.argv[2]
const serveur =net.createServer(socket=>{
    const time = moment().format('YYYY-MM-DD HH:mm')
    socket.write(time)
    socket.end('\n')
})
serveur.listen(arr)