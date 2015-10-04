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
  var _markup = [ '<ul>' ];
  var _i;
  for (_i = 0; _i < this.tasks.length; _i += 1) {
    _markup.push(this.tasks[_i].render());
  }
  _markup.push('</ul>');
  return _markup.join('\n');
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
  // TODO implement ajax call to gather task list
  var taskList = new TaskList();
  taskList.id = id;

  $.getJSON('http://zhaw.task.li/task_lists/demo', function (data) {
      taskList.title = data.title;

      $.each(data.tasks, function() {
           taskList.createTask(this.title);
           taskList.tasks[taskList.tasks.length - 1].done = this.done;
      });

      callback(taskList)
  });   
}