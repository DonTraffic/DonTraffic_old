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
      statusSliger = 1;
    } else{
      $('.revertGenderText').html('Девушки');
      $('.registrBestAccountPeopleSlider').css('backgroundImage','url(img/photoAccount/girl1.jpg)');
      statusSliger = 0;
    }

  }

}
//функционал слайдера в регистрации, при нажатии на фото
function funRegSligerHover() {
    $('.registrBestAccountPeopleSliderHover').css('top', '0');
}


//функция свайпа
let startPoint;
let moved = false;
let slider = document.getElementsByClassName('registrBestAccountPeopleSlider')[0];

// function funSliderRegisterTouch(e) {
//   e.preventDefault();
//   startPoint = e.changedTouches[0].pageX;
// }

// function funSliderRegisterMove(e) {
//   if (moved) {
//     return;
//   }
//   e.preventDefault();
//   if (e.changedTouches[0].pageX > startPoint + slider.offsetWidth / 4) {
//     console.log("направо");
//     moved = true;
//   }
//   if (e.changedTouches[0].pageX < startPoint - slider.offsetWidth / 4) {
//     console.log("налево");
//     moved = true;
//   }
// }

$('.registrBestAccountPeopleSlider').bind('touchstart', function(e) {
    e.preventDefault();
    startPoint = e.changedTouches[0].pageY;
    $('.registrBestAccountPeopleSliderHover').css('top', '0');
  }
);

$(".registrBestAccountPeopleSlider").bind('touchmove', function(e) {
    e.preventDefault();
    if (e.changedTouches[0].pageY > startPoint + slider.offsetHeight / 20) {//down
      $('.registrBestAccountPeopleSliderHover').css('top', '100%');
    }
    // if (e.changedTouches[0].pageY < startPoint - slider.offsetHeight / 20) {//top
    //   $('.registrBestAccountPeopleSliderHover').css('top', '0');
    // }
  }
);

// $(".registrBestAccountPeopleSlider").bind('touchmove', function() {
//   const slider = document.getElementById("slider");
//
//   slider.addEventListener("touchmove", move);
//   slider.addEventListener("touchstart", touch);
//   slider.addEventListener("touchend", () => {
//     setTimeout(() => {
//       moved = !moved;
//     }, 200);
//   });
//
// });
