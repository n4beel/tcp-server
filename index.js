const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  let remoteAddress = `${socket.remoteAddress} : ${socket.remotePort}`;

  console.log("new client connection is made", remoteAddress);

  socket.on("data", (data) => {
    console.log("received data %s : %s", remoteAddress, data);
    socket.write("received: " + data.toString());
  });

  socket.once("close", () => {
    console.log("connection closed from", remoteAddress);
  });

  socket.on("error", (err) => {
    console.log("error occured", remoteAddress);
  });
});

server.listen(7070, () => {
  console.log("server listening ");
});
