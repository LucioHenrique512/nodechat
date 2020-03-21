const io = require('socket.io').listen(8080);

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