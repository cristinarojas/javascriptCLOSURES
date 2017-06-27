//  A closure is an inner function that has access to the outer function's variables.
function Person(personName) {
	var name = personName; // Outer function variable

	this.getName = function() {
		return name; // This function have access to the outer function variable
	};
}

var me = new Person('Cristina'); // Instantie
me.getName(); // Using the method