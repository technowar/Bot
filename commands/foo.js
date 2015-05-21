'use strict';

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');

	Write('PRIVMSG ' + respondToChannel + ' :' + 'Bar');
};
