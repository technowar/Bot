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

var chan = ['#Jahm', '#Jaahm'];

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

	command.forEach(function (command) {
		if (streamString.match(command.match)) {
			irc.emit(command.emit);
		}
	});

	console.log(streamString);
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
	console.log('Sending REPLY');

	chan.forEach(function (channel) {
		respond('PRIVMSG ' + channel + ' :' + 'Boop');
	});
});