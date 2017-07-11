$(document).ready(function(){
  for(var i=0; i<25; i++){
    for(var j=0; j<25; j++){
      $('.grid').append("<div class='box'></div>");
    }
  }
  $('.box').mouseenter(function() {
    $(this).toggleClass("boxed");
  });
});
