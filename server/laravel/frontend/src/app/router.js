import Vue from 'vue';
import Router from 'vue-router';

// const Home = () => import('./components/Home');
// const Profile = () => import('./components/Profile');
// const Skill = () => import('./components/Skill');
// const Product = () => import('./components/Product');
// const Bbs = () => import('./components/Bbs');

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    // routes: [
    //     {
    //         path: '/',
    //         component: Home
    //     },
    //     {
    //         path: '/profile',
    //         component: Profile
    //     },
    //     {
    //         path: '/skills',
    //         component: Skill
    //     },
    //     {
    //         path: '/works',
    //         component: Product
    //     },
    //     {
    //         path: '/bbs',
    //         component: Bbs
    //     },
    // ]
})
