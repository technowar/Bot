'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Response = require('./response');

var commands = {
	'!beep' : 'boop',
	'!foo' : 'bar'
};

Server.irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	if (streamString.match(/^PING/)) {
		console.log('Sending PONG');

		Response.write('PONG');
	}

	for (var respond in commands) {
		if (streamString.match(new RegExp(respond, 'i'))) {
			var respondToChannel = streamSplit[2];
			var respondToCommand = commands[respond.toString()];

			console.log('Sending ' + respondToChannel + ' REPLY to ' + respondToCommand);

			Server.irc.emit(respondToCommand, respondToChannel);
			Response.write('PRIVMSG ' + respondToChannel + ' :' + respondToCommand);
		}
	}

	console.log(streamString);
});
