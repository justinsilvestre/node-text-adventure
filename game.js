var commands = require('./commands.js');
var actions = require('./actions.js')
var player = require('./player.js');
var promptInput = require('./prompt-input.js');
var Coordinate = require('./coordinate.js');

// Game class
var Game = function() {
	var game = this;

	// Game state
	game.on = true;
	game.map = [];
	for (var i = 0; i < 3; i++) {
		game.map[i] = [];
		for (var j = 0; j < 3; j++) {
			game.map[i][j] = new Coordinate();
		}
	}

	this.nextTask = actions.welcome;

	game.start = function() {
		while (game.on) {
			game.nextTask = game.nextTask();
		}
	};

};

module.exports = Game;