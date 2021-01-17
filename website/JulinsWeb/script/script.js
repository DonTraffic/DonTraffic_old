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

// функционал слайдера в регистрации, переворот при нажатии на смену гендера
var statusSliger = 0;
function funRegSligerGender() {
  $('.revertGender').css('animation', 'sliderRotate 1s ease');
  $('.registrBestAccountPeopleSlider').css('animation', 'sliderRotate 1s ease');
  setTimeout("$('.revertGender').css('animation', 'none')", 900);
  setTimeout("$('.registrBestAccountPeopleSlider').css('animation', 'none')", 900);
  setTimeout(funTimeoutSlider, 300);

  function funTimeoutSlider() {
    if (statusSliger == 0) {
      $('.revertGenderText').html('Парни');
      $('.registrBestAccountPeopleSlider').css('backgroundImage', 'url(img/photoAccount/man1.jpg)');
      $('.registrBestAccountPeopleSliderHover').css('top', '100%');
      statusSliger = 1;
    } else{
      $('.revertGenderText').html('Девушки');
      $('.registrBestAccountPeopleSlider').css('backgroundImage','url(img/photoAccount/girl1.jpg)');
      $('.registrBestAccountPeopleSliderHover').css('top', '100%');
      statusSliger = 0;
    }

  }

}
//функционал слайдера в регистрации, при нажатии на фото

$('.registrBestAccountPeopleSlider').bind('touchstart', function(e) {
    e.stopPropagation();
    $('.registrBestAccountPeopleSliderHover').css('top', '0');
  }
);

$('.registrBestAccountPeopleSlider').click(function(e) {
  e.stopPropagation();
  $('.registrBestAccountPeopleSliderHover').css('top', '0');
});

$('.buttonSliderClose').click(function(e) {
  e.stopPropagation();
  $('.registrBestAccountPeopleSliderHover').css('top', '100%');
});

//функционал слайдера при нажатии на стрелки
var arrowNumStatus = 2;
$('.arrowLeft').on('click', function() {
  if (arrowNumStatus <= 1) {
    alert('dddd');
  }else{

  }
});
