var readlineSync = require('readline-sync');
var actions = require('./actions.js');
var player = require('./player.js')

module.exports = function() {
	var game = this;
	game.on = true;

	game.prompt = function(prompt, options) {
		var resolved = false;
		while (!resolved) {
			var input = readlineSync.question(prompt + '\n');
			if (game.hasAction(input)) {
			} else {
				resolved = true;
				return input;
			}
		}
	};

	game.hasAction = function(input) {
		var allWords = input.split(' ');
		var firstWord = allWords.shift();
		if (actions.hasOwnProperty(firstWord)) {
			actions[firstWord].apply(this, allWords);
			return true;
		} else {
			return false;
		}
	};

	game.welcome = function() {
		player.name = game.prompt('Hello! What is your name?');
		console.log('Hello, ' + player.name);
		// if it's 'status', then give status, and repeat task.
		// otherwise, return the next task
		return game.welcome;
	};
	game.nextTask = game.welcome;

	game.start = function() {
		while (game.on) {
			game.nextTask = game.nextTask();
		}
	};

};