/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-03 12:41:43
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 14:32:49
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
  },
  {
    path: "/completion",
    name: "Completion",
    component: () =>
      import( "../views/Completion.vue")
  },
  {
    path: "/text",
    name: "Text",
    component: () =>
      import( "../views/Text.vue")
  },
  {
    path: "/word",
    name: "Word",
    component: () =>
      import( "../views/Word.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import( "../views/List.vue")
  },
  {
    path: "/audioPlay",
    name: "AudioPlay",
    component: () =>
      import( "../views/AudioPlay.vue")
  },
  {
    path: "/audioPlayClass",
    name: "AudioPlayClass",
    component: () =>
      import( "../views/AudioPlayClass.vue")
  },
  {
    path: "/sort",
    name: "Sort",
    component: () =>
      import( "../views/Sort.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
