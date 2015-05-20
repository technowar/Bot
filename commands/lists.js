'use strict';

var Commands = require('./commands');

module.exports = function () {
	var commands = Commands.commands;
	var commandName = [];

	for (var command in commands) {
		commandName.push(commands[command].commandName);
	}

	return 'Commands are: ' + commandName.join(', ');
};
