'use strict';

var Directory = process.cwd();

var Write = require('./write');

var Channels = require(Directory + '/utils/channel');
var Config = require(Directory + '/utils/config');

module.exports = function () {
	setTimeout(function () {
		Write('NICK ' + Config.NICK);
		Write('USER ' + Config.USER + ' 8 * :' + Config.REAL);
		Write('JOIN ' + Channels.join(','));
		Write('PRIVMSG NickServ :identify ' + Config.PASS);

		for (var channel in Channels) {
			Write('PRIVMSG ChanServ :OP ' + Channels[channel] + ' ' + Config.NICK);
		}
	}, 1000);
};
