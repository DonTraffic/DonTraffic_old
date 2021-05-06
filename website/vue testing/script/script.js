const app = new Vue({
    el: '#main',
    data:{
      title: 'Vue.js',
      textBinding: '',
      textCondition: '',
      names: ['Коля', 'Никитос', 'Артемида'],

    },
    mounted() {

    },
    methods: {

      supportWin() {
        $('.supportWin').css('top','19%');
        $('.winClose').css('top','0%');
        statusWindow = "supportWin";
      },
    }
});

var statusWindow = '';

function settingWin() {
  $('.settingWin').css('top','19%');
  $('.winClose').css('top','0%');
  statusWindow = "settingWin";
}

function winClose() {
  switch (statusWindow) {
    case "supportWin":
      $('.supportWin').css('top','100%');
      break;
    case "settingWin":
      $('.settingWin').css('top','100%');
      break;
  }
  $('.winClose').css('top','100%');
}