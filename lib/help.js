'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Commands = require(Directory + '/commands/commands');
var Perform = require('./perform');

Server.irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	for (var command in Commands) {
		if (streamString.match(new RegExp('!help', 'i'))) {
			var respondToCommand = command;

			Perform(respondToCommand, streamSplit[2]);
			Server.irc.emit(respondToCommand, streamSplit[2]);
		}
	}
});
