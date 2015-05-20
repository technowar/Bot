'use strict';

module.exports = function (options) {
	if (options) {
		return 'http://lmgtfy.com/?q=' + options.trim().replace(/\s+/g, '+').toLowerCase();
	}

	return 'Try again. Use `!google [ <option> ]` instead.'
};
