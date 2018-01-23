// MODULES
const express = require('express');
const http = require('http');  //built into node
const path = require('path');  //built into node
const socketIO = require('socket.io');   //also gives us access to a js library http://localhost:3000/socket.io/socket.io.js


// SET PATHS
const publicPath = path.join(__dirname, '../public');
// console.log(__dirname + '/ ../public');
// console.log(publicPath);

// SET GLOBAL VARIABLES
let port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);  //how we communicate between the server and client

// SET MIDDLEWARE
app.use(express.static(publicPath));

io.on('connection', (socket) => { //each connection is an event. individual socket of the user
	console.log('New user connected to server');

	socket.on('disconnect', () => {
		console.log('User was disconnected from server');
	});
});  

// START SERVER
server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});