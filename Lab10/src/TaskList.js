"use strict";

function TaskList(title) {
  this.id = null;
  this.tasks = [];
  this.title = title || "";
}

TaskList.prototype.size = function() {
  return this.tasks.length;
};

TaskList.prototype.createTask = function(title) {
  var _task = new Task(title);
  this.tasks.push(_task);
  return _task;
};


TaskList.prototype.render = function() {
  var $markup = $('<ul>');
  var _i;
  for (_i = 0; _i < this.tasks.length; _i += 1) {
    $markup.append(this.tasks[_i].render());
  }
  return $markup;
}

TaskList.prototype.toJSON = function() {
    var _return = {id:this.id, tasks: [], title: this.title};
    for (var _i = 0; _i < this.tasks.length; _i++) {
       _return.tasks.push({title: this.tasks[_i].title, done: this.tasks[_i].done}); 
    }
    
    return JSON.stringify(_return);
}

/*
 * persists the tasklist to the server.
 *
 * for tasklists without id (not yet persisted) the id
 * is written back to the model after it is received from
 * the server.
 */
TaskList.prototype.save = function() {
  // persist the current value of this (the current tasklist)
  // to another variable, so it may be used later in callbacks
  var _that = this;
  var _id = this.id;
  var _url = 'http://zhaw.task.li/task_lists/';

  if (_id) {
    _url = _url + _id;
  }
  // TODO add your ajax calls here ...
  $.post(_url,_that.toJSON(), function(data) { //imo nur JSON files unterst�tzt! m�sste im Post Header expected content gesetzt werden
    _that.id = JSON.parse(data).id;
  });
}

/*
 * Loads the given tasklist from the server.
 *
 * @param {string} id - unique identifier of the tasklist to load
 * @param {function} callback - method to call after the tasklist
 *   was successfully loaded. receives fully populated tasklist
 *   object as first and only parameter.
 */
TaskList.load = function(id, callback) {
  $.getJSON('http://zhaw.task.li/task_lists/'+id, function(data) {
    var _taskList = new TaskList()
    _taskList.id = data.id;
    _taskList.title = data.title;
    var _i;
    for (_i = 0; _i < data.tasks.length; _i += 1) {
      var _task = new Task();
      _task = _taskList.createTask(data.tasks[_i].title);
      _task.done = data.tasks[_i].done;
    }
    callback(_taskList)
  });
}