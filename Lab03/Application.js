"use strict;"

// Constructor for Object World. With Hello String
var World = function(){
	hello = "Hello World";
};

World.prototype.giveWorld = function(){
	return hello;
};



var Fibonacci = function() {

	this.a = 0;
	this.b = 1;
	this.fibs = [0, 1];

	this.calculate = function(n) {
		for(var i = 0; i < n - 2; i += 2) {
  		this.a = this.a + this.b;
  		this.b = this.b + this.a;
  		this.fibs[this.fibs.length] = this.a;
  		this.fibs[this.fibs.length] = this.b;
	}
	if (n % 2)
  		return this.a;
	return this.b;
	}
}


Fibonacci.prototype.getElement = function(element){
	var returnElement;
	for (var i = 0; i <= element; i++){
		returnElement = this.fibs[i];
	}
	return returnElement;
};


my_fibs = new Fibonacci();

my_fibs.calculate(10);