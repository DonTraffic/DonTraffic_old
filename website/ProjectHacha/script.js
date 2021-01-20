//функция важной информации
function funImportantInformOpen() {
  let elem = document.getElementById('importantInform');
  elem.style.zIndex = 1;
  elem.style.padding = 50 + 'px';
  elem.style.height = 100 + '%';
  elem.style.width = 100 + '%';
  elem.style.margin = 0 + 'px';
  elem.style.overflowY = 'scroll';
}
function funImportantInformClose() {
  let elem = document.getElementById('importantInform');
  elem.style.zIndex = -1;
  elem.style.padding = 0 + 'px';
  elem.style.height = 23 + 'px';
  elem.style.width = 174 + 'px';
  elem.style.margin = 8 + 'px';
  elem.style.overflow = 'hidden';
}

//функция регистрации
function funRegistrOpen(id) {
  let elem = document.getElementById(id);
  elem.style.zIndex = 1;
  elem.style.height = 100 + '%';
  elem.style.width = 100 + '%';
}

function funRegistrClose(id) {
  let elem = document.getElementById(id);
  elem.style.zIndex = -1;
  elem.style.height = 20 + 'px';
  elem.style.width = 10 + 'px';
}
