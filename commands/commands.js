'use strict';

module.exports = {
	':!commands' : {
		'execute' : require('./lists'),
		'commandName' : '!commands',
		'commandInfo' : 'Prints `Commands`',
		'privmsg' : true
	},
	':!foo' : {
		'execute' : require('./foo'),
		'commandName' : '!foo',
		'commandInfo' : 'Prints `Bar`',
		'privmsg' : true
	},
	':!about' : {
		'execute' : require('./about'),
		'commandName' : '!about',
		'commandInfo' : 'Print details',
		'privmsg' : true
	},
	':!beep' : {
		'execute' : require('./beep'),
		'commandName' : '!beep [ <option> ]',
		'commandInfo' : 'Prints `Boop` or `[ <option> ]`',
		'privmsg' : true
	},
	':!google' : {
		'execute' : require('./google'),
		'commandName' : '!google [ <option> ]',
		'commandInfo' : 'Googles [ <option> ]',
		'privmsg' : true
	},
	':!topic' : {
		'execute' : require('./topic'),
		'commandName' : '!topic',
		'commandInfo' : 'Prints `Test`',
		'privmsg' : false
	}
};
