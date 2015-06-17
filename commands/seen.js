'use strict';

var Fs = require('fs');

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');
	var PrettifyDate = require(Directory + '/lib/date');

	if (!optionsToCommand) {
		return Write('PRIVMSG ' + respondToChannel + ' :Try again. Use `!seen [ <user> ]` instead.');
	}

	Fs.readFile(Directory + '/logs/seen', 'utf8', function (error, data) {
		if (error) {
			throw error;
		}

		var dataArray = data.split('\n').reverse();

		for (var index = 0; index < dataArray.length; index++) {
			if (dataArray[index].match(optionsToCommand)) {
				return Write('PRIVMSG ' + respondToChannel + ' :' + optionsToCommand + ' left ' + PrettifyDate(dataArray[index].split(' ')[2]) + '.');
			}
		}

		return Write('PRIVMSG ' + respondToChannel + ' :I apologize. I have no records for ' + optionsToCommand + '.');
	});
};
