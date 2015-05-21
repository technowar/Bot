'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');

Server.irc.on('data', function (stream) {
	var Commands = require(Directory + '/commands/commands');

	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	if (Commands[streamSplit[3]]) {
		if (streamSplit.length < 5) {
			return Commands[streamSplit[3]].execute(streamSplit[2]);
		}

		Commands[streamSplit[3]].execute(streamSplit[2], streamSplit.splice(4, streamSplit.length).join(' '));
	}
});
