var player = require('./player.js');

module.exports = {
	status: function(args) {
		console.log('Your status here! name: ' + player.name);
	}
};