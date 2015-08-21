var player = require('./player.js');
var Command = require('./command.js');
var _ = require('underscore-node');

var commandInfo = {
		status: function(args) {
			console.log('Your status here! name: ' + player.name);
		},
		look: function(args) {
			console.log('Your position here! ' + player.x + ', ' + player.y);
		}
};

var commandNames = Object.keys(commandInfo);
var commands = commandNames.map(function(name) {
	return new Command(name, commandInfo[name]);
});

module.exports.names = commandNames;
module.exports.find = function(commandName) {
	return commandInfo[commandName];
}
module.exports.include = function(commandName) {
	return _.contains(commandNames, commandName);
}