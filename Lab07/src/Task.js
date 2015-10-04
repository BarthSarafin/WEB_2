"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
  var _checked = this.done ? 'checked="checked"' : "";
  var _title = this.title || "";
  var $markup = $(['<li>',
    '  <input name="done"  type="checkbox" '+_checked+'" />',
    '  <input name="title" type="text" value="'+_title+'" />',
    '</li>'].join(" "))
  $markup.data('task', this);
  // TODO: react on change of the checkbox and the input field:
  //       - populate done field from checkbox
  //       - populate title field from input text field
  //       - write new value using console.log
  $markup.find('input').change(function(event) {
      var task = $(this).parent().data('task');
      if (event.target.type == 'checkbox' ) {
          if(task.done) {
            $(this).removeAttr('checked');
          } else {
              $(this).attr("checked","checked");
          }
          task.done = !task.done; 
      }

      if (event.target.type == 'text') {
        task.title = $(this).val();
        console.log(task.title);
      }
  });
  return $markup;
};