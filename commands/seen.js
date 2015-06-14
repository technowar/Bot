'use strict';

var Fs = require('fs');

var Directory = process.cwd();

module.exports = function (respondToChannel, optionsToCommand) {
	var Write = require(Directory + '/lib/write');

	if (!optionsToCommand) {
		return Write('PRIVMSG ' + respondToChannel + ' :Try again. Use `!seen [ <user> ]` instead.');
	}

	Fs.readFile(Directory + '/logs/seen', 'utf8', function (error, data) {
		if (error) {
			throw error;
		}

		var dataArray = data.split('\n').reverse();

		for (var index = 1; index < dataArray.length; index++) {
			if (dataArray[index].match(optionsToCommand)) {
				return Write('PRIVMSG ' + respondToChannel + ' :' + optionsToCommand + ' left ' + respondToChannel + ' ' + prettyDate(dataArray[index].split(' ')[2]) + '.');
			}

			return Write('PRIVMSG ' + respondToChannel + ' :I apologize. I have no records for ' + optionsToCommand + '.');
		}
	});
};

function prettyDate (time) {
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," "));
	var diff = (((new Date()).getTime() - date.getTime()) / 1000);
	var day_diff = Math.floor(diff / 86400);

	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;

	return day_diff == 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "a minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}
