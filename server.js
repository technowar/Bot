var Net = require('net');

var server = {
	'PORT' : 6667,
	'ADDRESS' : 'irc.freenode.net'
};

var user = {
	'NICK' : 'Skolpad',
	'USER' : 'Skolpad',
	'REAL' : 'Skolpad BOT',
	'PASS' : 'Skolpad'
};

var chan = [
	'#skolpad'
];

var commands = {
	'!beep' : 'boop',
	'!foo' : 'bar'
};

var irc = Net.connect(server.PORT, server.ADDRESS, function () {
	console.log('Connecting to ' + server.ADDRESS + ':' + server.PORT);
});

irc.setEncoding('ascii');
irc.setNoDelay();

var response = function (stream) {
	irc.write(stream + '\n');
};

irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	if (streamString.match(/^PING/)) {
		console.log('Sending PONG');

		return response('PONG');
	}

	for (var respond in commands) {
		if (streamString.match(new RegExp(respond, 'i'))) {
			var respondToChannel = streamSplit[2];
			var respondToCommand = commands[respond.toString()];

			console.log('Sending ' + respondToChannel + ' REPLY to ' + respondToCommand);

			irc.emit(respondToCommand, respondToChannel);
			response('PRIVMSG ' + respondToChannel + ' :' + respondToCommand);
		}
	}

	console.log(streamString);
});

irc.on('connect', function () {
	setTimeout(function () {
		response('NICK ' + user.NICK);
		response('USER ' + user.USER + ' 8 * :' + user.REAL);
		response('JOIN ' + chan.join(','));
	}, 1000);
});