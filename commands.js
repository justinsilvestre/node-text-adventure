var player = require('./player.js');
var Command = require('./command.js');
var _ = require('underscore-node');

var commandsObj = {
		status: function(args) {
			console.log('Your status here! name: ' + player.name);
		},
		look: function(args) {
			console.log('Your position here! ' + player.x + ', ' + player.y);
		}
};

var commandNames = Object.keys(commandsObj).map(function(name) {
	return new Command(name, commandsObj[name]);
});

module.exports.names = commandNames;
module.exports.obj = commandsObj;
module.exports.include = function(commandName) {
	return _.contains(Object.keys(commandsObj), commandName);
}