"use strict;"

//Constructor for the Email Object
var Email = function(to,from,subject,body,signature){
	this.to = to;
	this.from = from;
	this.subject = subject;
	this.body = body;
	this.signature = signature;
};

Email.prototype.deliver = function(server){
	return server.sendEmail(this);
};

Email.prototype.getTo = function(){
	return this.to;
};

Email.prototype.getFrom = function(){
	return this.from;
};

Email.prototype.getSubject = function(){
	return this.subject;
};

Email.prototype.getBody = function(){
	return this.body;
};

Email.prototype.getSignature = function(){
	return this.signature;
};