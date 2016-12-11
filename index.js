const express = require('express'),
      http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const bodyParser = require('body-parser');

const USER = require('./app_modules/user');

const API = require('./app_modules/api');
const SOCKET = require('./app_modules/socket');
const Tictactoe = require('./app_modules/game');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use("/css",  express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/app", express.static(__dirname + '/app'));
app.use("/img",  express.static(__dirname + '/img'));

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
});

app.post('/login', (req, res)=>{
  let user = USER.create(req.body); 
  res.send(Object.assign({done: true}, user));
})

io.on('connection', function (socket) {
  
  
  socket.on('meeting', (data)=> {
    SOCKET.updateList(data);
    socket.emit('get', SOCKET.getPlayers());
    socket.broadcast.emit('get', SOCKET.getPlayers());
  });
  
  socket.on('invite', (data)=>{
    socket.emit('invited', data);
    socket.broadcast.emit('invited', data);
  });
  
  socket.on('room', (roomId)=>{
    let roomName = 'room'+roomId;
    socket.join(roomName);
    
  });
  
  socket.on('create', (data)=>{
    let roomName = 'room'+data.room;
    SOCKET.createRoom(roomName);
    socket.emit('start', {to: data.you, room: data.room});
    socket.broadcast.emit('start', {to: data.rival, room: data.room} );
  }); 
});


const PORT = 3000;

server.listen(PORT, ()=>{
  console.log(`sever runing on ${PORT}`);
});