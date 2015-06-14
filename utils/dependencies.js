'use strict';

var Directory = process.cwd();

module.exports = function () {
	require(Directory + '/lib/ping');
	require(Directory + '/lib/data');
	require(Directory + '/lib/connect')();
};
