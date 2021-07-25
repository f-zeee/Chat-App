//Node Server which will handle socket.io connections

const io = require('socket.io')(8000, {
    cors: {
      origin: '*',
    }
  });
//io listens to incomming requests

const users = {};

//here we are running a socket.io server which attaches an HTTP instance to
//itself. This is initialized by us as io. 

//io.on is a socket.io instances which listens multiple socket connections
io.on('connection', socket =>{

    socket.on('new-user-joined', name =>{
        console.log("New user", name);
    //this will append the new user in users{} and informs others new user has joined
        users[socket.id]=name;
        socket.broadcast.emit('user-joined', name); //telling all users,user joined
    })
    //when server recieves an event that a "new user joined":
    //1)users()is updated
    //2)we'll let know all other uers that a user has joined


    socket.on('send', message=>{
        socket.broadcast.emit('recieve', {message: message, name: users[socket.id]})
    })
    //if someone send something, others should recieve it; so this send will send a recieve event in client.js


    socket.on('disconnect', message=>{
        socket.broadcast.emit('leave', {message: message, name: users[socket.id]});
        delete users[socket.id];
        //every connection has unique user id called socket id
        //disconnect is an event in socket.io
        //this event is launched when any user leaves the chat
        
    })

})