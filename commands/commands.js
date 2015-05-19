'use strict';

module.exports = {
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
	':!beep' : {
		'execute' : require('./beep'),
		'commandName' : '!beep [ <option> ]',
		'commandInfo' : 'Prints `Boop` or `[ <option> ]`'
	},
	':!google' : {
		'execute' : require('./google'),
		'commandName' : '!google [ <option> ]',
		'commandInfo' : 'Googles [ <option> ]'
	}
};
