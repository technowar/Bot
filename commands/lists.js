'use strict';

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');

	var Commands = require('./commands');

	for (var command in Commands) {
		Write('PRIVMSG ' + respondToChannel + ' :' + Commands[command].commandName + ' - ' + Commands[command].commandInfo);
	}
};
