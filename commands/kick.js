'use strict';

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');

	if (!optionsToCommand) {
		Write('PRIVMSG ' + respondToChannel + ' :' + 'Try again. Use `!kick [ <user> ] [ <message> ]` instead.');
	} else if (optionsToCommand.trim().replace(/\s+/g, ' ').split(' ').length < 2) {
		var optionsSplit = optionsToCommand.trim().replace(/\s+/g, ' ').split(' ');

		Write('KICK ' + respondToChannel + ' ' + optionsSplit[0]);
	} else {
		var optionsSplit = optionsToCommand.trim().replace(/\s+/g, ' ').split(' ');

		Write('KICK ' + respondToChannel + ' ' + optionsSplit[0] + ' :' + optionsSplit.splice(1, optionsSplit.length).join(' '));
	}
};
