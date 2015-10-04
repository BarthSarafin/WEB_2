
// Constructor for Object Person. With first, lastname and age.
var Person = function(firstName, lastName, age){
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
};

var Steven = new Person("Bachmann", "Stefan", 28);

Person.prototype.getFullName = function(){
	return name = this.firstName + " " + this.lastName;
};

console.log(Steven.getFullName());

var Student = function(firstName, lastName, age, studies){
	this.studies = studies;
	Person.call(this, firstName, lastName, age);
};

// student subclass of person
Student.prototype = new Person();

var StevenTheStudent = new Student("Bachmann", "Stefan", 28, "IT");

console.log(StevenTheStudent);