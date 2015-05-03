var events= require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};

channel.on('join', function(id, client) {
	this.clients[id] = client;
	this.clients[id].write('welcome dos chatroom\n');
});

channel.on('broadcast', function(id, data) {
  for(var index in this.clients) {
    if(index != id) {
      this.clients[index].write(data);
    }
  }
});

var server = net.createServer(function(client) {
	var id = client.remoteAddress + ':' + client.remotePort;
	channel.emit('join', id, client);
	
	client.on('data', function(data) {
		channel.emit('broadcast', id, data);
	});
});

server.listen(3000);