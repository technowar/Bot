'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');

Server.irc.on('data', function (stream) {
	var Write = require('./write');

	var streamString = stream.toString().trim();

	if (streamString.match(/^PING/)) {
		console.log('Sending PONG');

		Write('PONG');
	}
});
