$(document).ready(function(){
  var grid = 15;
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

$(document).on("click", ".but", function(){
  $('.boxed').addClass("box");
  $('.boxed').removeClass("boxed");
  var new_grid = 15;
  new_grid = prompt("Please enter the new grid size", "between 1-64");
  while (new_grid > 64 || new_grid < 1){
    new_grid = prompt("Wrong. Please enter the new grid size", "between 1-64");
  };
  $('.grid').empty();
  for(var i=0; i<new_grid; i++){
    for(var j=0; j<new_grid; j++){
      $('.grid').append("<div class='box'></div>");
    }
  }
  var change = "calc(100% * (1/" + new_grid + ") - 2px)"
  $('.box').css({"width" : change, "height" : change});
  $('.boxed').css({"width" : change, "height" : change});
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
