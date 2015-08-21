var player = require('./player.js');
var promptInput = require('./prompt-input.js');

var actions = {
	welcome: function() {
		player.name = promptInput('Welcome to Kitchen RPG! In this realm, the Evil Flying Electric Toaster Army has taken over the world, and it is up to you, um.. what was your name again?');
		console.log('Ah, yes. Sir ' + player.name + ', with your trusty Greatspoon, to restore order to the Kitchen.');
		// return the next function to call
		// but WITHOUT PARENTHESES!!
		return actions.welcome;
	}
};

module.exports = actions;