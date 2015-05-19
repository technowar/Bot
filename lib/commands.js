'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Commands = require(Directory + '/commands/commands');
var Privmsg = require('./privmsg');

Server.irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	if (streamSplit[3] === ':!commands') {
		for (var command in Commands) {
			var responseToCommand = Commands[command].commandName + ' - ' + Commands[command].commandInfo;

			Privmsg(streamSplit[2], responseToCommand);
		}
	}
});
