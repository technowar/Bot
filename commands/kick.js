'use strict';

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');
	var Config = require(Directory + '/utils/config');

	if (!optionsToCommand) {
		return Write('PRIVMSG ' + respondToChannel + ' :Try again. Use `!kick [ <user> ] [ <message> ]` instead.');
	}

	var optionsSplit = optionsToCommand.trim().replace(/\s+/g, ' ').split(' ');

	if (optionsSplit[0] === Config.NICK) {
		Write('PRIVMSG ' + respondToChannel + ' :Unable to kick myself. Sorry.');
	} else if (optionsToCommand.trim().replace(/\s+/g, ' ').split(' ').length < 2) {
		Write('Kick ' + respondToChannel + ' ' + optionsSplit[0]);
	} else {
		Write('KICK ' + respondToChannel + ' ' + optionsSplit[0] + ' :' + optionsSplit.splice(1, optionsSplit.length).join(' '));
	}
};