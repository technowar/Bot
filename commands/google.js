'use strict';

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');

	if (!optionsToCommand) {
		return Write('PRIVMSG ' + respondToChannel + ' :Try again. Use `!google [ <option> ]` instead.');
	}

	Write('PRIVMSG ' + respondToChannel + ' :http://lmgtfy.com/?q=' + optionsToCommand.trim().replace(/\s+/g, '+').toLowerCase());
};
