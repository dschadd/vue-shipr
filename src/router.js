import Vue from 'vue';
import Router from 'vue-router';
import Landing from './views/Landing.vue';
import Dashboard from './views/Dashboard.vue';

import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Create from "./views/Shipments/Create.vue";
import Book from "./views/Shipments/Book.vue";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/shipment/book',
      name: 'book',
      component: Book
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/shipment/create",
      name: "shipment-create",
      component: Create
    }
  ]
});
