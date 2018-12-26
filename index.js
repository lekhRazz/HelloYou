const express=require('express');
const app=express();
const socket=require('socket.io');

app.use(express.static('./public'));

require('./startup/routes')(app);
require('./startup/db')();

const port=3000;
const server=app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

const io=socket(server);

io.on('connection',function(socket){
    console.log('socket connection is made',socket.id);
    socket.on('chat',function(data){
        socket.broadcast.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});