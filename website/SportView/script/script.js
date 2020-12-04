var status = 0;
function funTrainingPanel() {
  if (status == 0) {
    document.getElementById('anatomyTrainingClose').style.display = 'block';
    document.getElementById('anatomyTraining').style.display = 'block';
    status = 1;
  } else {

    document.getElementsByClassName('wrapMenu')[0].remove();
    document.getElementById('anatomyTrainingClose').style.display = 'none';
    document.getElementById('anatomyTraining').style.display = 'none';
    status = 0;
  }
}

function funCreate(arr) {

  //create wrapMenu
  var elemWrap = document.createElement('div');
  elemWrap.classList.add('wrapMenu');
  document.getElementById('anatomyTrainingContent').appendChild(elemWrap);

  for (var i = 0; i < arr[1].length; i++) {
    //src videoTraining
    document.getElementsByClassName('videoTrainingSrcTop')[0].src = arr[0][1];
    //text anatomyTrainingTextName
    document.getElementsByClassName('anatomyTrainingTextName')[0].textContent = arr[0][0];
    //create itemMenu
    var elemItem = document.createElement('div');
    elemItem.classList.add('itemMenu');
    document.getElementsByClassName('wrapMenu')[0].appendChild(elemItem);
    //create titleMenu
    var elemTitle = document.createElement('div');
    elemTitle.classList.add('titleMenu');
    elemTitle.textContent = arr[1][i][1];
    document.getElementsByClassName('itemMenu')[i].appendChild(elemTitle);
    //create menu
    var elemMenu = document.createElement('div');
    elemMenu.classList.add('menu');
    document.getElementsByClassName('itemMenu')[i].appendChild(elemMenu);
    //create h2
    var elemH2V = document.createElement('h2');
    elemH2V.classList.add('elemH2V');
    elemH2V.textContent = 'Видео';
    document.getElementsByClassName('menu')[i].appendChild(elemH2V);
    //create trainingVideo
    var elemVideo = document.createElement('div');
    elemVideo.classList.add('trainingVideo');
    document.getElementsByClassName('menu')[i].appendChild(elemVideo);
    //create trainingVideo src
    var elemVideoSrc = document.createElement('iframe');
    elemVideoSrc.classList.add('videoTrainingSrc');
    elemVideoSrc.src = arr[1][i][0];
    elemVideoSrc.setAttribute('allowfullscreen', '');
    document.getElementsByClassName('trainingVideo')[i].appendChild(elemVideoSrc);
    //create trainingExercisesText
    var elemTET = document.createElement('div');
    elemTET.classList.add('trainingExercisesText');
    document.getElementsByClassName('menu')[i].appendChild(elemTET);
    //create h2
    var elemH2T = document.createElement('h2');
    elemH2T.classList.add('elemH2T');
    elemH2T.textContent = 'Упражнения';
    document.getElementsByClassName('trainingExercisesText')[i].appendChild(elemH2T);
    //create ol
    var elemOl = document.createElement('ol');
    elemOl.classList.add('OlElemClass');
    document.getElementsByClassName('trainingExercisesText')[i].appendChild(elemOl);
    //create li
    for (var e = 0; e < arr[1][i][2].length; e++) {
      var elemLi = document.createElement('li');
      elemLi.classList.add('trainingLi');
      elemLi.textContent = arr[1][i][2][e];
      document.getElementsByClassName('OlElemClass')[i].appendChild(elemLi);
    }

  }

}

function funTrain(arr){
  funTrainingPanel();
  funCreate(arr)

    $('.titleMenu').click(function(){
      $(this).parent().toggleClass('active');
      $(this).next().slideToggle();
    });

}


//buttom revert function
var statusRevert = 0;
var elemBefore = 'block';
var elemBack = 'none';

function funRevert() {
  var el1 = document.getElementById('bodyBackBlock');
  var el2 = document.getElementById('bodyBeforeBlock');
  if (statusRevert == 0) {
    el1.style.display = 'block'
    el2.style.display = 'none'
    statusRevert = 1;
  } else {
    el1.style.display = 'none'
    el2.style.display = 'block'
    statusRevert = 0;
  }
  elemBefore = $('#bodyBeforeBlock').css('display');
  elemBack = $('#bodyBackBlock').css('display');
}

//fun head onclick
function funTrainHead() {
  alert("Просто читай интересные тебе книги, занимайся делом где можно подумать.\n Давай, у тебя всё получиться!!");
}

//fun width 565px
window.onload = function() {
  funMinWidth();
}

window.onresize = function() {
  funMinWidth();
  funMinWidthPhone();
}

function funMinWidth() {
  var width = $(window).width();
  var elem = document.getElementsByClassName('bodyBlock');
  if (width < 565) {
    $(elem[0]).css('display', 'none');
    $(elem[1]).css('display', 'none');
    $('#musclesBlockPhone').css('display', 'block');
  } else{
    $(elem[0]).css('display', elemBefore);
    $(elem[1]).css('display', elemBack);
    $('#musclesBlockPhone').css('display', 'none');
  }
}

var statusMenuPhone = 0;
function funMenuPhone() {
  if (statusMenuPhone == 0) {
    $('#menuImg').css('padding', '0 10px');
    $('#menuImg').css('background-color', 'rgb(235, 235, 235)');

    $('#navPhoneActive').css('height', '81px');
    $('#navPhoneActive').css('padding-top', '10px');
    $('#navPhoneActive').css('overflow', 'visible');

    statusMenuPhone = 1;
  } else{
    $('#menuImg').css('padding', '0 5px');
    $('#menuImg').css('background-color', '#b5b5b5');

    $('#navPhoneActive').css('height', '0px');
    $('#navPhoneActive').css('padding-top', '0px');
    $('#navPhoneActive').css('overflow', 'hidden');

    statusMenuPhone = 0;
  }
}

function funMinWidthPhone() {
  var width = $(window).width();
  if (width > 565) {
    statusMenuPhone = 1;
    funMenuPhone()
  }
}
