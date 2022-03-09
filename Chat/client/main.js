"use strict";

var socket = io.connect("http://192.168.0.17:7373", { forceNew: true });
console.log("cargado");

socket.on("messages", function (data) {
  console.table(data);
  render(data);
});

function render(data) {
  var html = data.map(function (message, index) {
      return (`
        <div class="messages">
            <strong> ${message.nickname}</strong> dice:
            <p>${message.text} </p>
        </div>
      `);
  }).join(' ');

  document.getElementById("messages").innerHTML = html;
}


function addMessage(e){

  var newMessage ={
    nickname: document.getElementById('nickname').value,
    text: document.getElementById('text').value
  }
  document.getElementById('nickname').style.display ='none';
  socket.emit('add-message', newMessage);
  document.getElementById('text').value="";
}
