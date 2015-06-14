'use strict';

var Net = require('net');

var Config = require('./utils/config');

var irc = Net.connect(Config.PORT, Config.ADDRESS, function () {
	console.log('Connecting to ' + Config.ADDRESS + ':' + Config.PORT);
});

irc.setEncoding('ascii');
irc.setNoDelay();

exports.irc = irc;

irc.on('connect', function () {
	require('./utils/dependencies')();
});

irc.on('close', function () {
	require('./utils/dependencies')();
});
