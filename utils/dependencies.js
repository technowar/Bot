'use strict';

var Directory = process.cwd();

module.exports = function () {
	require(Directory + '/lib/ping');
	require(Directory + '/lib/data');
	require(Directory + '/lib/seen');
	require(Directory + '/lib/files')();
	require(Directory + '/lib/connect')();
};
