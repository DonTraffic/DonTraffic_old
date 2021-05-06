Vue.component('codee', {
    template: "<span><span class='code'><slot></slot></span></span>"
});

Vue.component('tab', {
    template: "<span><span class='tab'></span></span>"
});

Vue.component('text-one-comp',{
    template: `<span>я <i>робот дурачёк</i></span>`,
});

Vue.component('text-two-comp',{
    template: `<span><i><slot></slot></i></span>`,
});