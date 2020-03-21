const socket = require("socket.io-client")("http://127.0.0.1:8080");
let name = "";
const input = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

socket.on('joinhed-chat',data=>{
  if(data !== name)
  console.log(`${data}`)
})

const getName = () => {
  input.question("Digite seu nome: ", input => {
    name = input;
    socket.emit('join-chat',name)
    sendMessage();
  });
};

const sendMessage = () => {
  input.question(">", input => {
    socket.emit("emit-message", { name, message: input });
    sendMessage();
  });
};

socket.on("recive-message", data => {
  console.log(`${data.name}> ${data.message}`);
  sendMessage();
});

getName();

