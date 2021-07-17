function funHeaderContentAnim(height) {
    document.getElementById('headerContent').animate(
        [
            {padding: '0px'},
            {padding: '40px'}
        ],{
            duration: 1000,
            iterations: 1
        }
    );
    document.getElementById('headerContent').animate(
        [
            {height: '0px'},
            {height: height}
        ],{
            duration: 1000,
            iterations: 1
        }
    )
}

function funHeaderContentComp(height) {
    document.getElementById('headerContent').style.padding = '40px';
    document.getElementById('headerContent').style.height = height;
}

const widthValue = window.innerWidth;

let height;

window.onload = function() {
    document.getElementById('imageHeader').style.opacity = '1';

    if (widthValue > 501) {
        height = '50%';
    } if (widthValue < 501) {
        height = '100%';
    } else {
        
    }

    setTimeout(funHeaderContentAnim, 500, height);
    setTimeout(funHeaderContentComp, 1500, height);
}