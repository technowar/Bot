'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Response = require('./response');

Server.irc.on('data', function (stream) {
	var streamString = stream.toString().trim();

	if (streamString.match(/^PING/)) {
		console.log('Sending PONG');

		Response.write('PONG');
	}
});
