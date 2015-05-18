'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Commands = require(Directory + '/commands/commands');
var Response = require('./response');

Server.irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	for (var command in Commands) {
		if (streamString.match(new RegExp(command, 'i'))) {
			var respondToChannel = streamSplit[2];
			var respondToCommand = Commands[command.toString()]();

			console.log('Sending `' + respondToCommand + '` to `' + respondToChannel + '`');

			Server.irc.emit(respondToCommand, respondToChannel);
			Response.write('PRIVMSG ' + respondToChannel + ' :' + respondToCommand);
		}
	}

	console.log(streamString);
});
