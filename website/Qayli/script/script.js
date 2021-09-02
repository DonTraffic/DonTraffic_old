// 
function funItemQuantity () {
    let width = $(window).width();
    if (width <= 650) {
        let item = document.getElementsByClassName('footerListItem');
        for (let i = 2; i < item.length; i++){
            document.getElementsByClassName('footerListItem')[i].style.display = 'none';
        }
        funCastingInformationMortgage();
    }
    if (width <= 570) {
        let item = document.getElementsByClassName('newBuildingsContainerItem');
        for (let i = 4; i < item.length; i++){
            document.getElementsByClassName('newBuildingsContainerItem')[i].style.display = 'none';
        }
    }
}
// 
$('.footerListButton').on('click', function () {
    $('.footerListItem').css('display', 'block');
    $('.footerListButton').css('display', 'none');
});
// 
function funCastingInformationMortgage () {
    let elem = document.getElementsByClassName('informationMortgageBlockCreditNum');
    for (let i = 0; i < elem.length; i++) {
        item = elem[i].innerHTML;
        let num = parseInt((item.split('').filter((c) => c !== " ").join("").split("—"))[1]);
        num = num / 1000000;
        if (num < 10) {
            num = num * 1000
            elem[i].innerHTML = `до ${num} тыс.₽`
        } else {
            elem[i].innerHTML = `до ${num} млн.₽`
        }
    }
}

// вызов при загрузке
$(window).resize(funItemQuantity());