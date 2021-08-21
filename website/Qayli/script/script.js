// let objectMortgageProgram = {
//     bank1: {
//         svg: '/img/icon/bankHome.svg',
//         name: 'Семейная ипотека1',
//         underName: 'Банк ДомРФ',
//         credit: '1 000 000 — 12 000 000₽',
//         underCredit: 'На срок до 30 лет',
//         bet: '3,99%',
//         payment: '9 082₽',
//     },
//     bank2: {
//         svg: '/img/icon/bankHome.svg',
//         name: 'Семейная ипотека2',
//         underName: 'Банк ДомРФ',
//         credit: '1 000 000 — 12 000 000₽',
//         underCredit: 'На срок до 30 лет',
//         bet: '3,99%',
//         payment: '9 082₽',
//     },
//     bank3: {
//         svg: '/img/icon/bankHome.svg',
//         name: 'Семейная ипотека3',
//         underName: 'Банк ДомРФ',
//         credit: '1 000 000 — 12 000 000₽',
//         underCredit: 'На срок до 30 лет',
//         bet: '3,99%',
//         payment: '9 082₽',
//     },
    
// }

// for (const key in objectMortgageProgram) {
//     let parentsBlock = document.getElementsByClassName('informationMortgageContainer')[0];

//     let block = document.createElement('div');
//     block.classList.add('informationMortgageBlock');
//     parentsBlock.appendChild(block);

//     let blockFirst = document.createElement('div');
//     blockFirst.classList.add('informationMortgageBlockFirst');
//     block.appendChild(blockFirst);

//         let blockFirstImg = document.createElement('img');
//         blockFirstImg.src = objectMortgageProgram[key].svg;
//         blockFirst.appendChild(blockFirstImg);

//         let blockFirstName = document.createElement('div');
//         blockFirstName.classList.add('informationMortgageBlockFirstName');
//         blockFirst.appendChild(blockFirstName);

//             let blockFirstNameH3 = document.createElement('h3');
//             blockFirstNameH3.textContent = objectMortgageProgram[key].name;
//             blockFirstName.appendChild(blockFirstNameH3);
            
//             let blockFirstNameSpan = document.createElement('span');
//             blockFirstNameSpan.textContent = objectMortgageProgram[key].underName;
//             blockFirstName.appendChild(blockFirstNameSpan);

//     for (let i = 0; i < 3; i++) {
//         let blockFlex = document.createElement('div');
//         blockFlex.classList.add('informationMortgageBlockFlex');
//         block.appendChild(blockFlex);

//             let blockFlexH3 = document.createElement('h3');
//             blockFlexH3.textContent = objectMortgageProgram[key].underName;
//             blockFlex.appendChild(blockFlexH3);

//             let blockFlexSpan = document.createElement('span');
//             blockFlexSpan.textContent = 'sdf';
//             blockFlex.appendChild(blockFlexSpan);

//     }



// }