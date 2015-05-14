var net = require('net');

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

var respondTo = '';

var irc = net.connect(server.PORT, server.ADDRESS, function () {
	console.log('Connecting to ' + server.ADDRESS + ':' + server.PORT);
});

var command = [{
	'match' : /^PING/,
	'emit' : 'pong'
}, {
	'match' : '!beep',
	'emit' : 'beep'
}];

irc.setEncoding('ascii');
irc.setNoDelay();

var respond = function (stream) {
	irc.write(stream + '\n');
};

irc.on('data', function (stream) {
	var streamString = stream.toString().trim();
	var streamSplit = streamString.split(' ');

	command.forEach(function (command) {
		if (streamString.match(command.match)) {
			respondTo = streamSplit[2];
			irc.emit(command.emit);
		}
	});
});

irc.on('connect', function () {
	setTimeout(function () {
		respond('NICK ' + user.NICK);
		respond('USER ' + user.USER + ' 8 *:' + user.REAL);
		respond('JOIN ' + chan.join(','));
	}, 1000);
});

irc.on('pong', function () {
	console.log('Sending PONG');

	respond('PONG');
});

irc.on('beep', function () {
	console.log('Sending REPLY to ' + respondTo);

	respond('PRIVMSG ' + respondTo + ' :' + 'Boop');
});