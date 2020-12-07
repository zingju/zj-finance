import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/Home";
import Moneys from "../Moneys/Money";
import Ious from "../Ious/Index"
import Raise from "../raise/Index";
Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component:Home
        },
        {
            path: '/',
            name: "home",
            component:Home
        },
        {
            path: '/money',
            name: 'money',
            component:Moneys
        },
        {
            path: '/ious',
            name: 'ious',
            component:Ious
        },
        {
            path: "/raise",
            name: "raise",
            component:Raise
        }
    ]
})