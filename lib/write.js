'use strict';

var Directory = process.cwd();

var Server = require(Directory + '/server');

module.exports = function (stream) {
	Server.irc.write(stream + '\n');
};
