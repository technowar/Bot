'use strict';

module.exports = function () {
	var Commands = require('./commands');
	var commandName = [];

	for (var command in Commands) {
		commandName.push(Commands[command].commandName);
	}

	return 'Commands are: ' + commandName.join(', ');
};
