var Game = require('../lib/game.js');

describe('Game', function() {

	it('should start out active', function() {
		var game = new Game();
		expect(game.on).toBe(true);
	});

});