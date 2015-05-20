'use strict';

var Net = require('net');

var Config = require('./utils/config');

var irc = Net.connect(Config.PORT, Config.ADDRESS, function () {
	console.log('Connecting to ' + Config.ADDRESS + ':' + Config.PORT);
});

irc.setEncoding('ascii');
irc.setNoDelay();

exports.irc = irc;

require('./lib/ping');
require('./lib/data');

irc.on('connect', function () {
	var Write = require('./lib/write');

	var Channels = require('./utils/channel');

	setTimeout(function () {
		Write('NICK ' + Config.NICK);
		Write('USER ' + Config.USER + ' 8 * :' + Config.REAL);
		Write('JOIN ' + Channels.join(','));
		Write('PRIVMSG NickServ :identify ' + Config.PASS);

		for (var channel in Channels) {
			Write('PRIVMSG ChanServ :OP ' + Channels[channel] + ' ' + Config.NICK);
		}
	}, 1000);
});
