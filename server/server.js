const app = require('express')();
const server = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(server);

io.on('connection', socket => {
	console.log('your id', socket.id);
	socket.emit('your id', socket.id);
	socket.on('send message', body => {
		io.emit('message', body);
	});
});

server.listen(8000, () => console.log('Server running on port 8000'));
