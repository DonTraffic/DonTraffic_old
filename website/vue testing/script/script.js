const app = new Vue({
    el: '#main',
    data:{
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

      settingWin() {
        $('.settingWin').css('top','19%');
        $('.winClose').css('top','0%');
        statusWindow = "settingWin";
      }

    }
    
});

var statusWindow = '';

// function settingWin() {
//   $('.settingWin').css('top','19%');
//   $('.winClose').css('top','0%');
//   statusWindow = "settingWin";
// }

function winClose() {
  switch (statusWindow) {
    case "supportWin":
      $('.supportWin').css('top','100%');
      break;
    case "settingWin":
      $('.settingWin').css('top','100%');
      break;
  };
  $('.winClose').css('top','100%');
}

// var catalogStatus = 0;
// function catalogWin() {
//   if (catalogStatus == 0) {
//     $('#catalog').css('bottom','94%');
//     $('#buttonCatalog').addClass('buttonCatalogClassOpen');
//     $('#buttonCatalog').removeClass('buttonCatalogClassClose');
//     catalogStatus = 1;
//   } else {
//     $('#catalog').css('bottom','100%');
//     $('#buttonCatalog').addClass('buttonCatalogClassClose');
//     $('#buttonCatalog').removeClass('buttonCatalogClassOpen');
//     catalogStatus = 0;
//   }
// }
