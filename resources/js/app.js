import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// app.js
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//v-calendar
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    firstDayOfWeek: 2,
});

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// Install BootstrapVue
Vue.use(BootstrapVue)

new Vue({
    el: '#dw',
    components: {
        'dw-app': App
    },
    router,
    store
})
