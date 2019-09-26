import Vue from 'vue';
import App from './App.vue';
import './assets/css/index.css';

// const root = document.createElement('div')
// document.body.appendChild(root)
//
// new Vue({
//     render: (h) => h(App)
// }).$mount(root)
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
