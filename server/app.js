const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = 3000;

server.listen(PORT, console.log(`Server is listening on ${PORT}`));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});