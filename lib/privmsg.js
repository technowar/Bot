'use strict';

module.exports = function (respondToChannel, responseToCommand) {
	var Write = require('./write');

	console.log('Sending `PRIVMSG ' + respondToChannel + ' :' + responseToCommand + '`');

	Write('PRIVMSG ' + respondToChannel + ' :' + responseToCommand)
};
