var height;

window.onload = function() {
  heightValue();
  heigthRegistr();
}

window.onresize = function() {
  heightValue();
  heigthRegistr();
}

function heightValue() {
  height = $(window).height();
}

function heigthRegistr() {
  $('.registration').css('height', height);
}
