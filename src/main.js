import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
//import Vuelidate from 'vuelidate'

import App from './App.vue'
import { routes } from './routes/routes.js'
import { store } from './store/store.js'

//Routing
Vue.use(VueRouter);
export const router = new VueRouter({
    routes,
    mode: 'history'
})

//Vue.user(Vuelidate)

//url de DB api
axios.defaults.baseURL = 'https://auth-vue-184f9.firebaseio.com';
/*axios.defaults.headers.common['Authorization']='rerer';
axios.defaults.headers.post['WWW-Authenticate']='post header';
axios.defaults.headers.get['WWW-Authenticate']='get header';

const deletemyheader=axios.interceptors.response.use((config)=>{
console.log(config);
},(error)=>{
console.log(error);
});

//supprime l'interception en response: console.log(config); sera supprime
axios.interceptors.response.eject(deletemyheader);*/

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})