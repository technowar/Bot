'use strict';

var Fs = require('fs');

var Directory = process.cwd();

var Server = require(Directory + '/server');

Server.irc.on('data', function (stream) {
	var streamString = stream.trim();
	var streamSplit = streamString.split(' ');

	var nickname;
	var hostname;

	if (streamSplit[1] === 'PART' || streamSplit[1] === 'QUIT') {
		nickname = streamSplit[0].split('!')[0].split(':')[1].toLowerCase();
		hostname = streamSplit[0].split('!')[1].toLowerCase();

		var seen = nickname + ' ' + hostname + ' ' + new Date().toISOString() + '\n' ;

		Fs.appendFile(Directory + '/logs/seen', seen, function (error) {
			if (error) {
				throw error;
			}
		});
	}
});
