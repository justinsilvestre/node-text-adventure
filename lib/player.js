var Player = function() {
	var player = this;
	this.x = 2;
	this.y = 2;
	this.allowedCommandNames = ['look'];

	this.can = function(commandName) {
		for (var i = 0; i < player.allowedCommandNames.length; i++) {
			if (player.allowedCommandNames[i] === commandName) {
				return true;
			}
		}
		return false;
	};
};
module.exports = new Player();