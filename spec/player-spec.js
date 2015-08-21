var player = require('../lib/player.js');

describe('player', function() {

	describe('can', function() {
		beforeEach(function(){
			player.allowedCommandNames = ['look'];
		})

		it('should return true for allowed commands', function() {
			expect(player.can('look')).toBe(true);
		});

		it('should return false for allowed commands', function() {
			expect(player.can('status')).toBe(false);
		});
	})

});