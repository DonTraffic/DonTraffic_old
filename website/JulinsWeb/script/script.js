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

  if (height > 425) {
    $('.enterRegistrPC').css('display','flex');
    $('.enterRegistrMob').css('display','none');
  } else {
    $('.enterRegistrPC').css('display','none');
    $('.enterRegistrMob').css('display','flex');
  }

}
