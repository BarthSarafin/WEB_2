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
  var _hash = { id: this.id, title: this.title, tasks: [] }
  var _i;
  for (_i = 0; _i < this.tasks.length; _i += 1) {
    _hash.tasks.push({
      title: this.tasks[_i].title,
      done:  this.tasks[_i].done
    });
  }
  return JSON.stringify(_hash);
}

/*
 * persists the tasklist to the server.
 *
 * for tasklists without id (not yet persisted) the id
 * is written back to the model after it is received from
 * the server.
 */
TaskList.prototype.save = function() {
  var _that = this;
  var _url = 'http://zhaw.task.li/task_lists/';
  if (this.id) { _url += this.id; }
  $.post(_url, this.toJSON(), function(data) {
    _that.id = JSON.parse(data).id;
    window.location.hash = _that.id
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
    console.log(_taskList);
    callback(_taskList)
  });
}

TaskList.prototype.clear = function() {
    localStorage.clear();
    location.reload();
} // läd ganze seite neu. nicht nur den teil, der aktualisiert ist!! imo 4 verschiedene objekte. kom nicht miteinander.
// müssten mitteilen wenn was geändert wird --> Databinding in WEB3

// json.stringify für localstorage!! localstaorge kann nur text speichern!