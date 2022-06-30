<template>
    <div class="startSlide slide" v-bind:class="{'slideVisibility-top': visibilitySlideStart}">

        <div class="startSlide-content">

            <h1 id="h1">{{ printData.value.h1 }}</h1>
            <h2 id="h2">{{ printData.value.h2 }}</h2>
            <button
                id="btn"
                v-on:click="visibilitySlide('visibilitySlideStart'), startAnimPersona()"
                v-bind:class="{'disable': !printData.value.btn}"
            >
                {{ printData.value.btn }}
            </button>

        </div>

        <img src="../../assets/img/startSlide/startSlideGrass.png" alt="startSlideGrass">

    </div>
</template>

<script>
export default {
    name: "StartSlide",
    props: {
        startAnimPersona: Function,
        visibilitySlide: Function,
        visibilitySlideStart: Boolean,
    },
    data() {
        return {
            printData: {
                text: {
                    china: {
                        h1: '唐特拉菲克',
                        h2: '如果你编程，那么用爱',
                        btn: '进入投资组合',
                    },
                    rus: {
                        h1: 'DonTraffic',
                        h2: 'Если программировать, то с любовью',
                        btn: 'Перейти к портфолио',
                    },
                },
                value: {
                    h1: '',
                    h2: '',
                    btn: '',
                },
                setting: {
                    interval: 100,
                    intervalSet: 0,
                    // clearPrint: false,
                }
            }

        };
    },
    mounted() {
        for (let countLang = 0; countLang < Object.keys(this.printData.text).length; countLang++) {
            let langKey = Object.keys(this.printData.text)[countLang]
            setTimeout( ()=> {
                for (let countText = 0; countText < Object.keys(this.printData.text[langKey]).length; countText++) {
                    let textKey = Object.keys(this.printData.text[langKey])[countText]
                    for (let countLetter = 0; countLetter < this.printData.text[langKey][textKey].length; countLetter++) {
                        setTimeout( () =>{
                            if (this.printData.value[textKey].length > countLetter) {
                                this.printData.value[textKey] = this.printData.value[textKey].replace(this.printData.value[textKey][countLetter], this.printData.text[langKey][textKey][countLetter])
                            } else {
                                this.printData.value[textKey] += this.printData.text[langKey][textKey][countLetter]
                            }
                        }, this.printData.setting.interval += 100 )

                    }
                }
            }, this.printData.setting.interval += this.printData.setting.intervalSet)
            this.printData.setting.intervalSet = 500
        }
    }, 
};
</script>