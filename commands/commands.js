'use strict';

module.exports = {
	':!commands' : {
		'execute' : require('./lists'),
		'commandName' : '!commands',
		'commandInfo' : 'Prints `Commands`'
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
	':!beep' : {
		'execute' : require('./beep'),
		'commandName' : '!beep [ <option> ]',
		'commandInfo' : 'Prints `Boop` or `[ <option> ]`'
	},
	':!google' : {
		'execute' : require('./google'),
		'commandName' : '!google [ <option> ]',
		'commandInfo' : 'Googles [ <option> ]'
	},
	':!topic' : {
		'execute' : require('./topic'),
		'commandName' : '!topic [ <option> ]',
		'commandInfo' : 'Change topic to [ <option> ]'
	}
};
