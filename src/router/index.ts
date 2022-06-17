import { createRouter as createVueRouter, createWebHashHistory, Router } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../components/Profile.vue";
import Login from "../components/Login.vue"
import { createAuthGuard } from "@auth0/auth0-vue";
import { App } from 'vue';

export function createRouter(app: App): Router {
  return createVueRouter({
    routes: [
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/",
        name: "profile",
        component: Profile,
        beforeEnter: createAuthGuard(app),
        meta: {
          requiresAuth: true
        }
      }
    ],
    history: createWebHashHistory()
  })
}
