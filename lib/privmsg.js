'use strict';

var Write = require('./write');

module.exports = function (respondToChannel, responseToCommand) {
	console.log('Sending `PRIVMSG ' + respondToChannel + ' :' + responseToCommand + '`');

	Write('PRIVMSG ' + respondToChannel + ' :' + responseToCommand)
};
