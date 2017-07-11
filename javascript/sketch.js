var click = false;
var grid = 16;

$(document).ready(function(){
  for(var i=0; i<grid; i++){
    for(var j=0; j<grid; j++){
      $('.grid').append("<div class='box'></div>");
    }
  }
  $('.box').mouseenter(function() {
    $(this).addClass("boxed");
    $(this).removeClass("box");
    var num = (document.querySelectorAll('.box').length);
    if (num < 1){
      $('.grid').css("border" , "3px solid green");
      $('.boxed').css({"background-color" : "green", "border" : "1px solid green"});
    };
  });
});

$(document).on("click", "#db", function(){
  grid = prompt("Please enter the new grid size", "between 1-64");
  while (grid > 64 || grid < 1){
    grid = prompt("Wrong. Please enter the new grid size", "between 1-64");
  };
  $('.grid').empty();
  for(var i=0; i<grid; i++){
    for(var j=0; j<grid; j++){
      $('.grid').append("<div class='box'></div>");
    }
  }
  var change = "calc(100% * (1/" + grid + ") - 2px)"
  $('.box').css({"width" : change, "height" : change});
  $('.boxed').css({"width" : change, "height" : change});
  $('.box').mouseenter(function() {
    $(this).addClass("boxed");
    $(this).removeClass("box");
    var num = (document.querySelectorAll('.box').length);
    if (num < 1){
      $('.boxed').css({"background-color" : "green", "border" : "1px solid green"});
    };
  });
});

$(document).on("click", "#rb", function() {
  $('.box, .boxed').mouseenter(function() {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
  });
});

$(document).on("click", "#bm", function() {
  $('.grid').empty();
  for(var i=0; i<grid; i++){
    for(var j=0; j<grid; j++){
      $('.grid').append("<div class='box'></div>");
    }
  }
  var change = "calc(100% * (1/" + grid + ") - 2px)"
  $('.box').css({"width" : change, "height" : change});
  $('.boxed').css({"width" : change, "height" : change});
  $('.box').mouseenter(function() {
    $(this).addClass("boxed");
    $(this).removeClass("box");
    var num = (document.querySelectorAll('.box').length);
    if (num < 1){
      $('.boxed').css({"background-color" : "green", "border" : "1px solid green"});
    };
  });
});
