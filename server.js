require('dotenv/config')
const io = require('socket.io').listen(8080);

const hostname = process.env.HOSTNAME
const httpPort = process.env.HTTPPORT 

console.log({
    host:`${hostname}:${httpPort}`,
})

io.on('connection',(socket)=>{
    console.log(socket.id)
    
    socket.on('join-chat',(data)=>{
        socket.broadcast.emit('joinhed-chat',`> ${data} entrou no chat.`)
    })

    socket.on('emit-message',(data)=>{
        socket.broadcast.emit('recive-message',data)
        console.log(data)
    })

})