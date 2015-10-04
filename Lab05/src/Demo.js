"use strict";

var taskList;

$(function() {

  $("h1").after("This is a Test.after");

  // create a tasklist to display
  taskList = new TaskList();
  taskList.createTask("Setup todo list");
  taskList.createTask("Buy milk");
  taskList.createTask("Read recipe");
  taskList.createTask("Invite guests");
  taskList.tasks[0].done = true;

  $('#taskList').append(taskList.render());    
  $('#taskList').css({'background-color':'red'});

  console.log('Application successfully initialized');

});
