'use strict';

var Net = require('net');

var Config = require('./utils/config');
var Channel = require('./utils/channel');

var irc = Net.connect(Config.PORT, Config.ADDRESS, function () {
	console.log('Connecting to ' + Config.ADDRESS + ':' + Config.PORT);
});

irc.setEncoding('ascii');
irc.setNoDelay();

exports.irc = irc;

require('./lib/ping');
require('./lib/request');
var Response = require('./lib/response');

irc.on('connect', function () {
	setTimeout(function () {
		Response.write('NICK ' + Config.NICK);
		Response.write('USER ' + Config.USER + ' 8 * :' + Config.REAL);
		Response.write('JOIN ' + Channel.join(','));
	}, 1000);
});
