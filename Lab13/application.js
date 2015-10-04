"use strict";

$(function() {
  var context = $('#a').get(0).getContext("2d");
  for (var x = 0.5; x < 795; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, 590);
  }
  for (var y = 0.5; y < 595; y += 10) {
    context.moveTo(0, y);
    context.lineTo(790, y);
  }
  context.strokeStyle = "#eee";
  context.stroke();

  context.beginPath();
  context.moveTo(0,   560);
  context.lineTo(780, 560);
  context.moveTo(775, 555);
  context.lineTo(780, 560);
  context.lineTo(775, 565);

  context.moveTo(40, 590);
  context.lineTo(40, 10);
  context.moveTo(45, 15);
  context.lineTo(40, 10);
  context.lineTo(35, 15);

  context.strokeStyle = "#000";
  context.stroke();

  context.font = "bold 12px sans-serif";
  context.fillText("x", 760, 580);
  context.fillText("y", 20, 40);
  event.stopPropagation();

  // Vertical line
  context.beginPath();
  context.moveTo(50,50);
  context.lineTo(50,150);
  context.strokeStyle = "red";
  context.stroke();
  context.closePath();

  // filled square
  context.beginPath();
  context.fillStyle = "green";
  context.fillRect(70,50,50,100);
  context.stroke();
  context.closePath();

  // square
  context.beginPath();
  context.strokeStyle = "grey";
  context.strokeRect(190,50,100,100);
  context.stroke();
  context.closePath();

  // 0.5 line
  context.beginPath();
  context.strokeStyle = "blue";
  context.moveTo(300,150);
  context.lineTo(500,50);
  context.stroke();
  context.closePath();

  // circle
  context.beginPath();
  context.strokeStyle = "orange";
  context.arc(550,100,50,0,2*Math.PI, false);
  context.stroke();
  context.closePath();

  // Triangle
  context.beginPath();
  context.moveTo(650,50);
  context.lineTo(600,150);
  context.lineTo(700,150);
  context.lineTo(650,50);
  context.strokeStyle = "magenta";
  context.stroke();
  context.closePath();


});