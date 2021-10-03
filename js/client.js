const socket = io('http://localhost:8000');

const form= document.getElementById('sendcontainer');
const messageInput = document.getElementById('messageinp');
const messageContainer = document.querySelector(".container");
//the above line means whenever I recieve messages I should put it in that container
var audio = new Audio('ting.mp3');

const append = (message , position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position == 'left'){
        audio.play();
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput= ' ';

})

const namee = prompt("Enter your name to join");
socket.emit('new-user-joined', namee);

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'right')
})

socket.on('recieve', data =>{
    append(`${data.name}: ${data.message}`, 'left')
    //append(`${data.user}: ${data.message}`, 'left') we shouldn't use this cause user recieve method is giving us 'name' so we'll use that 1st
})

socket.on('leave', namee =>{
    append(`${namee} left the chat`, 'left')
    //append(`${data.user}: ${data.message}`, 'left') we shouldn't use user recieve method is giving 'name' so we'll use that
    //we'll put this messeage on left itself because on right we get our own messages
})