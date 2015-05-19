'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');
var Response = require('./response');

module.exports = function (respondToCommand, respondToChannel) {
	console.log('Sending `PRIVMSG ' + respondToChannel + ' :' + respondToCommand + '`');

	Response.write('PRIVMSG ' + respondToChannel + ' :' + respondToCommand);
};
