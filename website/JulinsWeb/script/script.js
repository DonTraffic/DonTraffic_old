var heightScreen;
var widthScreen;

window.onload = function() {
  // получение значение экрана
  screenValue();
  // изменение размера контейнера при 426px в регистрации
  heigthRegistr();
  // убирает последние 2 блока из топа людей при маленьком размере экрана
  topAccountPosition();
}

window.onresize = function() {
  // получение значение экрана
  screenValue();
  // изменение размера контейнера при 426px в регистрации
  heigthRegistr();
  // убирает последние 2 блока из топа людей при маленьком размере экрана
  topAccountPosition();
}

function screenValue() {
  // получение значение экрана
  heightScreen = $(window).height();
  widthScreen = $(window).width();
}

function heigthRegistr() {
  // изменение размера контейнера при 426px
  $('.registration').css('height', heightScreen);

  if (widthScreen < 426) {
    $('.container').css('height', heightScreen);
  } else {
    $('.container').css('height', 'auto');
  }

}

function topAccountPosition() {

  if (widthScreen < 780) {
    // гендер выравнивание
    $('.accounGenderNameRegistrTop').css('display', 'flex');
    $('.accounGenderNameRegistrBottom').css('display', 'none');
    $('.accounGenderNameRegistr').css('margin-right', '0');
  } else{
    // гендер выравнивание
    $('.accounGenderNameRegistrTop').css('display', 'none');
    $('.accounGenderNameRegistrBottom').css('display', 'flex');
    $('.accounGenderNameRegistr').css('margin-right', '20px');
  }


}
