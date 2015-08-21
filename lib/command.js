var Command = function(name, execute) {
	var command = this;

	command.name = name;
	command.execute = execute;
};

module.exports = Command;