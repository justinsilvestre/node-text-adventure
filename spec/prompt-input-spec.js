var player = require('../lib/player.js');
var promptInput = require('../lib/prompt-input.js');

describe('promptInput', function() {
	it('should return user input', function() {
		expect(promptInput('type something')).toBeTruthy();
	});
});