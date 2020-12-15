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
  // убирает последние 2 блока из топа людей при маленьком размере экрана
  if (widthScreen < 1025) {
    $('.imgAccountTopRegistrNone').css('display', 'none');
  } else{
    $('.imgAccountTopRegistrNone').css('display', 'flex');
  }

  if (widthScreen < 700) {
    $('.imgAccountTopRegistr').css('width', 'auto');
    $('.topGirl').css('flex-wrap', 'wrap');
    $('.topGirl').css('height', '300px');
    $('.containerAccount').css('margin-top', '10px');
    $('.topMan').css('flex-wrap', 'wrap');
    $('.topMan').css('height', 'auto');
    $('.topMan').css('margin', '0px');
    $('.topMan').css('margin-top', '20px');
    $('.topAccounGenderNameTop').css('display', 'block');
    $('.topAccounGenderNameBottom').css('display', 'none');
    $('.containerAccount').css('height', '200px');
  } else{
    $('.imgAccountTopRegistr').css('width', '100%');
    $('.topGirl').css('flex-wrap', 'nowrap');
    $('.topGirl').css('height', '200px');
    $('.topMan').css('flex-wrap', 'nowrap');
    $('.topMan').css('height', '200px');
    $('.topMan').css('margin', '30px');
    $('.topAccounGenderNameTop').css('display', 'none');
    $('.topAccounGenderNameBottom').css('display', 'flex');
    $('.containerAccount').css('height', '100%');
  }

  if (widthScreen < 520) {
    $('.topMan').css('display', 'none');
    $('.topManSection').css('display', 'block');
    $('.topGirl').css('height', '600px');
    $('.imgAccountTopRegistr1').css('width', '100%');
    $('.containerAccount').css('flex-wrap', 'wrap');
    $('.containerAccount').css('height', 'auto');
    $('.imgAccountTopRegistr1').css('flex-basis', '100%');
    $('.imgAccountTopRegistr').css('margin-top', '10px');
    $('.accountBlockRegistr').css('height', '200px');
    $('.imgAccountTopRegistr1').css('height', '200px');
  } else{
    $('.topManSection').css('display', 'none');
    $('.topMan').css('display', 'flex');
    $('.imgAccountTopRegistr1').css('width', 'auto');
    $('.containerAccount').css('flex-wrap', 'nowrap');
    $('.imgAccountTopRegistr1').css('flex-basis', 'auto');
    $('.imgAccountTopRegistr').css('margin-top', '0px');
  }

  if (widthScreen < 420) {
    $('.container').css('justify-content', 'center');
    $('.accountBlockRegistr').css('width', '113px');
    $('.accountBlockRegistr').css('height', '150px');
    $('.imgAccountTopRegistr').css('height', '150px');
    $('.containerAccount').css('height', '330px');
    $('.topAccounGenderName').css('height', '60px');
    $('.topGirl').css('height', '420px');
  } else{
    $('.container').css('justify-content', 'space-around');
    $('.accountBlockRegistr').css('width', '150px');
    $('.accountBlockRegistr').css('height', '200px');
    $('.imgAccountTopRegistr').css('height', '200px');
    $('.topAccounGenderName').css('height', 'auto');
    $('.topGirl').css('height', 'auto');
  }

}
