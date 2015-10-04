"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
  var checkedBox = this.done ? 'checkedBox' : '';
  var markup = $('').add('<li>');

  markup.append('<input type="text" class="selection_label" name="title" value="' + this.title + '">');
  markup.append('<input type="checkbox" class="selection_checkbox" name="done" value="' + checkedBox + '">');
  return markup;
};

