'use strict';

var Fs = require('fs');

var Directory = process.cwd();

module.exports = function () {
	Fs.stat(Directory + '/logs/seen', function (error, stats) {
		if (error) {
			Fs.writeFile(Directory + '/logs/seen', '', function (error) {
				if (error) {
					throw error;
				}

				console.log(Directory + '/logs/seen created');
			});
		}
	});

	Fs.stat(Directory + '/logs/log', function (error, stats) {
		if (error) {
			Fs.writeFile(Directory + '/logs/log', '', function (error) {
				if (error) {
					throw error;
				}

				console.log(Directory + '/logs/log created');
			});
		}
	});
};
