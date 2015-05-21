'use strict';

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');

	if (!optionsToCommand) {
		return Write('PRIVMSG ' + respondToChannel + ' :' + 'Try again. Use `!voice [ <user> ]` instead.');
	}

	Write('MODE ' + respondToChannel + ' +v ' + optionsToCommand);
};
