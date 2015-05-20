'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');

Server.irc.on('data', function (stream) {
	var Commands = require(Directory + '/commands/commands');
	var Privmsg = require('./privmsg');

	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	if (Commands[streamSplit[3]] && Commands[streamSplit[3]].privmsg) {
		var responseToCommand = '';

		if (streamSplit.length < 5) {
			responseToCommand = Commands[streamSplit[3]].execute();
		} else {
			var optionsToCommand = streamSplit.splice(4, streamSplit.length).join(' ');

			responseToCommand = Commands[streamSplit[3]].execute(optionsToCommand);
		}

		Privmsg(streamSplit[2], responseToCommand);
	} else {
		console.log('Wtf');
	}
});
