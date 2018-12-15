
//Make connetion
var socket = io.connect('http://localhost:3000');

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send')
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
//Emit event
function sendMessage() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
}
// btn.addEventListener('click', function () {
//     socket.emit('chat', {
//         message: message.value,
//         handle: handle.value
//     });
// });


//Emit typing event
message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});

//trigger send btn on enter key press
message.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      btn.click();
    }
  });

//Listen for events
socket.on('chat', function (data) {
    feedback.innerHTML = '  ';
    output.innerHTML += '<p><strong>' + data.handle + '</strong>:' + data.message + '</p>';
});

//Listen typing event
socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' ' + ' is typing message.....</em></p>';
});