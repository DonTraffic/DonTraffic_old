
new Vue ({
    el: '#sectionsSkills',
    data: {
        
    },
    methods: {
        funBlockSkill(value, num) {
          let elem = $('#example' + value);
          if (num == false) {
            elem.css('width', '100vw');
            elem.css('height', '100vh');
            elem.css('border-radius', '0px');
            elem.css('z-index', '10');
          } else {
            elem.css('width', '0vw');
            elem.css('height', '0vh');
            elem.css('border-radius', '50%');
            elem.css('z-index', '-10');
          }
        },
    },
});

//
function test() {
  $('#scene').css('opacity', '1');
}
window.setTimeout(test, 1500)

// header
function headerFun (id) {
  let nameWebsite = $('#nameWebsite');
  let persona = $('#persona');
  let heading = $('#heading');
  if (id == 1) {
      nameWebsite.css('opacity','0');
      nameWebsite.css('zIndex','0');
      heading.css('opacity','1');
      heading.css('zIndex','1');
  } else if (id == 2) {
      heading.css('opacity','0');
      heading.css('zIndex','0');
      persona.css('opacity','1');
      persona.css('zIndex','1');
  } else {
      persona.css('opacity','0');
      persona.css('zIndex','0');
      nameWebsite.css('opacity','1');
      nameWebsite.css('zIndex','1');
  }
}

let num = 1;
function funInfo () {
  let container = $('#infoContainer');
  let content = $('#infoContent');
  let button = $('#infoButton');

  if (num == 1) {

    container.css('height', '100vh')
    container.css('width', '100vw')
    container.css('top', '0')
    container.css('right', '0')
    container.css('border-radius', '0')
    container.css('background-color', 'rgba(95, 95, 95, .7)')

    content.css('opacity', '1')

    button.css('opacity', '0')
    button.css('height', '0') 

    num = 2

  } else {

    container.css('height', '40px')
    container.css('width', '40px')
    container.css('top', '10px')
    container.css('right', '10px')
    container.css('border-radius', '50%')
    container.css('background-color', 'rgba(95, 95, 95, 0)')

    content.css('opacity', '0')

    button.css('opacity', '1')
    button.css('height', '100%')   

    num = 1
    
  }

}

// style skills
// button
$('.blockSkillsContainerButton').css('top', $(".blockSkillsItem").height() / 2 - 30 + 'px');
// block
document.getElementsByClassName('fp-tableCell')[1].style.alignItems = 'flex-start';

// style persona section
// width < 440px block
$('#personInfo').css('width', $("#blockPersona").width() + 'px');
$('#statsPersona').css('width', $("#blockPersona").width() + 'px');
// button
$('.blockPersonaContainerButton').css('top', $("#statsPersona").height() / 2 - 30 + 'px');
$('.blockPersonaContainerButton').css('left', $("#statsPersona").width() - 30 + 'px');
// fp-tabletCell
// if (!($(window).width() < 440)) {
//   document.getElementsByClassName('fp-tableCell')[2].style.padding = '20px';
// }
// document.getElementsByClassName('fp-tableCell')[2].style.padding = '20px';

let personaButtonStatus = 0;
function funPersonaButton(margin = 40) {
  if (personaButtonStatus == 0) {
    $('.statsPersonaMove').css('left', -($('.statsPersonaMove').width() + margin) +'px');
    $('.personButton').toggleClass('fa-chevron-right fa-chevron-left');
    personaButtonStatus = 1;
  } else {
    $('.statsPersonaMove').css('left','0px');
    $('.personButton').toggleClass('fa-chevron-left fa-chevron-right');
    personaButtonStatus = 0;
  }

}

//
function funButton(widthBlock, moveBlock, margin, status, button = 0) {
  let width = $(widthBlock).width() + margin;
  if (status == '1') {
    $(moveBlock).css('left', -width+'px');
  } else {
    $(moveBlock).css('left','0px');
  }
  if (button != 0) {
    // $(button).
  }
}

funButton('.blockSkillsItem', '.blockSkillsContainer', 30, 1);
funButton('.blockSkillsItem', '.blockSkillsContainer', 30, 2);
funButton('.statsPersonaUl', '.statsPersonaMove', 40, 1);
funButton('.statsPersonaUl', '.statsPersonaMove', 40, 2);


