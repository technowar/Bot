'use strict';

module.exports = {
	':!beep' : {
		'execute' : require('./beep'),
		'commandName' : '!beep [option]',
		'commandInfo' : 'Prints `Boop` or `[option]`'
	},
	':!foo' : {
		'execute' : require('./foo'),
		'commandName' : '!foo',
		'commandInfo' : 'Prints `Bar`'
	},
	':!about' : {
		'execute' : require('./about'),
		'commandName' : '!about',
		'commandInfo' : 'Print details'
	},
	':!google' : {
		'execute' : require('./google'),
		'commandName' : '!google [option]',
		'commandInfo' : 'Googles [option]'
	}
};
