'use strict';

module.exports = {
	':!commands' : {
		'execute' : require('./lists'),
		'commandName' : '!commands',
		'commandInfo' : 'List all the available commands'
	},
	':!about' : {
		'execute' : require('./about'),
		'commandName' : '!about',
		'commandInfo' : 'Print bot details'
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
	},
	':!voice' : {
		'execute' : require('./voice'),
		'commandName' : '!voice [ <user> ]',
		'commandInfo' : 'Set +v to [ <user> ]'
	},
	':!kick' : {
		'execute' : require('./kick'),
		'commandName' : '!kick [ <user> ]',
		'commandInfo' : 'Kick [ <user> ] [ <message> ]'
	}
};
