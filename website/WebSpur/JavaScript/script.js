var statusButton = true;
var stat = true;

window.addEventListener("resize", function() { // блок adaptation, вычисление ширины и высоты блоков

  var heightProportion = document.getElementById('exampleProportionHeight').scrollHeight;
  document.getElementById('heightProportionSpan').innerHTML = heightProportion;

  var widthProportion = document.getElementById('exampleProportionWidth').scrollWidth;
  document.getElementById('widthProportionSpan').innerHTML = widthProportion;

}, false);

function buttonGifFunction() { //блок backgroundSection событие кнопки
  if (statusButton == true) {
    document.getElementById("backgroundSection").style.backgroundImage = "url('gif/animeGIF.gif')";
    document.getElementById("backgroundSectionButton").innerHTML = "Использовать JPG";
    document.getElementById("backgroundSectionButton").style.backgroundColor = "#3884ad";
    statusButton = false;
    return false;
  } else {
    document.getElementById("backgroundSection").style.backgroundImage = "url('image/background/forestThree.jpg')";
    document.getElementById("backgroundSectionButton").innerHTML = "Использовать GIF";
    document.getElementById("backgroundSectionButton").style.backgroundColor = "#757575";
    statusButton = true;
    return false;
  }
}

//upBar действия при нажатии и наведении
function upBarAnimationOn() {
  document.getElementById('upBarImage').style.animation = "box 0.8s 1";
}
function upBarAnimationOff() {
  document.getElementById('upBarImage').style.animation = "none";
}
function upBarClick() {
  window.scrollBy(0, -10000);
}

//progressBar в верху страници
window.addEventListener('scroll', progressBar);
function progressBar() {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;

  document.querySelector('#progress').style.width = per + '%';
}

//
function scrollbarButtonFun() {
  var scrollbarUserValue = document.getElementById('scrollbarInput').value;
  document.body.style.setProperty("--scrollbarWidth", scrollbarUserValue + "px");
}
function scrollbarImgResetFun() {
  document.body.style.setProperty("--scrollbarWidth", "3px");
}

//
var alignContentArray = [7, 'alignContentElement', 'exampleFlex', 'alignContent'];
var flexDirectionArray = [4, 'flexDirectionButtonElement', 'flexDirectionElement', 'flexDirection'];

//
function flexFunElement(status, number, array) {
  var element = document.getElementsByClassName(array[1]);
  for (var i = 0; i < array[0]; i++) {
    element[i].style.fontWeight = 100;
  }
  document.getElementById(array[2]).style[array[3]] = status;
  element[number].style.fontWeight = 900;
}


//
function alignSelfFun(status, number, array) {
  var element = document.getElementsByClassName('alignSelfButtonElement');
  var numElement = document.getElementById('alignSelfInputValue').value - 1;
  for (var i = 0; i < 4; i++) {
    element[i].style.fontWeight = 100;
  }
  document.getElementsByClassName('alignSelfElementDiv')[numElement].style.alignSelf = status;
  element[number].style.fontWeight = 900;
}

//
function flexGrowFun() {
  var number = document.getElementById('flexGrowInputNumber').value - 1;
  var valueNum = document.getElementById('flexGrowInputValueId').value;

  if (number < 3) {
    document.getElementsByClassName('flexGrowElementDiv')[number].style.flexGrow = valueNum;
  } else {
    alert("Перебор, здесь нет столько элементов")
  }

}

//
function orderFun() {

  for (var i = 0; i < 6; i++) {
    document.getElementsByClassName('flex-item')[i].style.order = i + 1;
  }

  var NumEle = document.getElementById('numElement').value - 1;
  var NumOrd = document.getElementById('numOrder').value;

  if (NumEle < 6) {
    document.getElementsByClassName('flex-item')[NumEle].style.order = NumOrd;
    document.getElementsByClassName('flex-item')[NumOrd - 1].style.order = NumEle + 1;
  }else {
    alert("Перебор, столько чисел тут нет...");
  }
}



//
function gridRemoveBlock() {
  var div = document.getElementsByClassName('gridTemplateElement');
  var quantity = 0;
  for (var i = 1; i < div.length; i++) {
    quantity++;
  }
  document.getElementsByClassName('gridTemplateElement')[quantity].remove();
}

//
function gridAddBlock() {
  var div = document.createElement("div");
  div.className = 'gridTemplateElement';
  document.getElementsByClassName('gridTemplateScene')[0].appendChild(div);
}

//parallaxChan изменение паралакса уменьшение

window.addEventListener( 'resize', funContainerChan );

function funContainerChan() {
  funResetWidthScreen();
  funParallaxChanDecrease();
}

function funResetWidthScreen(){
  widthSize = document.getElementById('imageSection').scrollWidth;
}

var limitStatus = 9;
var xStatic = 480;

function funParallaxChanDecrease() {
  if (widthSize >= xStatic) {
    funAddParallaxChan(limitStatus)
  } else{
    var numberStatus = 0;

    while (widthSize < xStatic) {
      widthSize = widthSize + 45
      numberStatus++;
    }

    while (numberStatus > 0) {
      numberStatus = numberStatus - 1
      xStatic = xStatic - 45;
      limitStatus = limitStatus - 1;
    }

    funAddParallaxChan(limitStatus)
  }
}

function funAddParallaxChan(limit) {
  var parallax = new Parallax(scene, {
    hoverOnly: true,
    scalarY:0,
    scalarX:25,
    limitX:limit
  });
}
