/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-03 12:41:43
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-05 09:23:07
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( "../views/Login.vue")
  },
  {
    path: "/index",
    name: "Index",
    component: () =>
      import( "../views/Index.vue")
  },
  {
    path: "/ribbonEffect",
    name: "RibbonEffect",
    component: () =>
      import( "../views/ribbonEffect.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
