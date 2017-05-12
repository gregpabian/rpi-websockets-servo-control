// grab references to DOM elements
var statusEl = document.getElementById('status');
var dotEl = document.getElementById('dot');
// initialize WebSocket
var socket = io();
// define helper flags
var isMoving = false;
var isConnected = false;
// bind to socket events
socket.on('connect', function() {
  statusEl.textContent = 'Connected';
  isConnected = true;
});
socket.on('disconnect', function() {
  statusEl.textContent = 'Disconnected';
  isConnected = false;
});
// set the initial dot position
socket.on('reset', function (x, y) {
  dotEl.style.left = x + '%';
  dotEl.style.top = y + '%';
});
// handle mouse inputs
dotEl.addEventListener('mousedown', function() {
  if (!isConnected) {
    return;
  }

  dotEl.classList.add('move');
  isMoving = true;
}, false);

document.addEventListener('mousemove', function(event) {
  if (!isMoving) {
    return;
  }

  var rect = dotEl.parentElement.getBoundingClientRect();

  // calculate dot position in relation to the box (in %)
  var x = (event.clientX - rect.left) / rect.width * 100;
  var y = (event.clientY - rect.top) / rect.height * 100;
  // limit values to 0-100 range
  x = x < 0 ? 0 : x > 100 ? 100 : x; 
  y = y < 0 ? 0 : y > 100 ? 100 : y;
  // update dot position
  dotEl.style.left = x + '%';
  dotEl.style.top = y + '%';
  // send the position to the server
  socket.emit('rotate', x, y);
}, false);

document.addEventListener('mouseup', function() {
  dotEl.classList.remove('move');
  isMoving = false;
}, false);
