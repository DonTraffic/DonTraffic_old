<template>
    <div class="cart cartStart">

        <div class="cartStart__content">

            <h1>{{ printData.value.h1 }}</h1>
            <h2>{{ printData.value.h2 }}</h2>
            <button>Показать больше</button>

        </div>

        <div class="cartStart__backgroung">
            <div class="cartStart__backgroung_sun_trajectory">
                <div class="cartStart__backgroung_sun"></div>
            </div>
            <img
                class="cartStart__backgroung_grass"
                src="./../assets/img/grass.png"
                alt="grass"
            >
        </div>

    </div>
</template>

<script>
    export default {
        name: 'cartStart',
        data() {
            return {
                printData: {
                    text: {
                        china: {
                            h1: '唐特拉菲克',
                            h2: '如果你编程，那么用爱',
                        },
                        rus: {
                            h1: 'DonTraffic',
                            h2: 'Если программировать, то с любовью',
                        },
                    },
                    value: {
                        h1: '',
                        h2: '',
                    },
                    setting: {
                        interval: 100,
                        intervalSet: 0,
                    }
                }
            }
        },
        mounted() {
            let dataText = this.printData.text
            let dataValue = this.printData.value
            for (let countLang = 0; countLang < Object.keys(dataText).length; countLang++) {
                let langKey = Object.keys(dataText)[countLang]
                setTimeout(()=> {
                    for (let countText = 0; countText < Object.keys(dataText[langKey]).length; countText++) {
                        let textKey = Object.keys(dataText[langKey])[countText]
                        for (let countLetter = 0; countLetter < dataText[langKey][textKey].length; countLetter++) {
                            setTimeout(() =>{
                                dataValue[textKey].length > countLetter ?
                                    dataValue[textKey] = dataValue[textKey].replace(dataValue[textKey][countLetter], dataText[langKey][textKey][countLetter]) :
                                    dataValue[textKey] += dataText[langKey][textKey][countLetter];
                            }, this.printData.setting.interval += 100)
                        }
                    }
                }, this.printData.setting.interval += this.printData.setting.intervalSet)
                this.printData.setting.intervalSet = 500
            }
        }, 
        methods: {
            // grassMove(el) {
            //     let getRandomInt = (max) => {return Math.floor(Math.random() * max)}

            //     let limit = 20
            //     let count = getRandomInt(limit)
            //     let progress = count ? count : 2
            //     let revert = Boolean(getRandomInt(2)) // 0 1 ... 9 10 == false, 10 9 ... 1 0 == true
            //     let side = Boolean(getRandomInt(2)) // true == left

            //     // рандомные стартовые позиции
            //     el.style.transform = `
            //         skewX(${getRandomInt(limit)}deg)
            //         translate(-${getRandomInt(limit)}px)
            //     `

            //     setInterval(() => {
            //         revert ? progress-- : progress++
            //         revert = progress >= limit || progress <= 0 ? !revert : revert
            //         side = progress <= 0 ? !side : side

            //         side ?
            //             el.style.transform = `skewX(${progress}deg) translate(-${progress}px)`:
            //             el.style.transform = `skewX(-${progress}deg) translate(${progress}px)`;
                    
            //     }, 700)

            //     function move (mouse) {
            //         revert = true
            //         side = mouse.offsetX >= 4 ? true : false 
            //         progress = limit
                    
            //         el.removeEventListener('mouseover', move)
            //         setTimeout(() => {
            //             el.addEventListener('mouseover', move)
            //         }, 2000)
            //     }

            //     el.addEventListener('mouseover', move)

            // }

        }

    }
</script>