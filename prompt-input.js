var readlineSync = require('readline-sync');
var commands = require('./commands.js');
var player = require('./player.js');

var tryCommand = function(commandName, args) {
	if (commands.include(commandName)) {
		return function() {
			commands.obj[commandName].apply(this, args);
		}
	} else {
		return false;
	}
};

module.exports = function(promptGiven, options) {
	var resolved = false;
	while (!resolved) {
		var input = readlineSync.question(promptGiven + '\n>');
		var allWords = input.split(' ');
		var commandName = allWords.shift();
		var command = tryCommand(input, allWords);
		if (command && player.can(commandName)) {
			command();
		} else {
			resolved = true;
			return input;
		}
	}
};