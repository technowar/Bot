'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Commands = require(Directory + '/commands/commands');
var Perform = require('./perform');

Server.irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	if (Commands[streamSplit[3]]) {
		var respondToCommand = '';

		if (streamSplit.length < 5) {
			respondToCommand = Commands[streamSplit[3]].execute();
		} else {
			var optionsToCommand = streamSplit.splice(4, streamSplit.length).join(' ');

			respondToCommand = Commands[streamSplit[3]].execute(optionsToCommand);
		}

		Perform(respondToCommand, streamSplit[2]);
		Server.irc.emit(respondToCommand, streamSplit[2]);
	}
});
