"use strict";

$(function() {
  var taskList = new TaskList();
  taskList.createTask("Setup todo list");
  taskList.createTask("Buy milk");
  taskList.createTask("Read recipe");
  taskList.createTask("Invite guests");

  taskList.tasks[0].done = true;

  $('#createTask').click(function(event) {
    event.preventDefault();
    var task = taskList.createTask('');
    $('#taskList ul').append(task.render());
  });


  $('#taskList').html(taskList.render());

  $("#taskList ul").on('change', ':checkbox', function() {
    // Every code related goes in here
    console.log($(this));

      // könnte alternativ auch in render() ausgelagert werden
    if ($(this).is(':checked')) {
        $(this).parent('li').attr('class','finished').slideUp('slow', function() {
            $("#taskList ul").append($(this).slideDown('slow'));
        });
        $(this).prop('checked',true);
    } else {
        $(this).prop('checked',false);
        $(this).parent('li').attr('class','');
        $(this).parent('li').prependTo('#taskList ul');
    }

  });
});