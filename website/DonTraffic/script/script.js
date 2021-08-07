
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

// style and script blockSkill button
$('.blockSkillsContainerButton').css('top', $(".blockSkillsItem").height() / 2 - 30 + 'px');

document.getElementsByClassName('fp-tableCell')[1].style.alignItems = 'flex-start';

let statusSkillButton = 'right';
function funSkillButton() {
  let width = $('.blockSkillsItem').width() + 30;
  if (statusSkillButton == 'right') {
    $('.blockSkillsContainer').css('left', -width+'px');
    statusSkillButton = 'left';
  } else {
    $('.blockSkillsContainer').css('left','0px');
    statusSkillButton = 'right';
  }
}


funSkillButton();
funSkillButton();



