/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-03 12:41:43
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-04 11:16:21
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
// import './mock.api'; // 接口API
Vue.config.productionTip = false;
Vue.use(ElementUI);


var instance = axios.create();
instance.interceptors.response.use(response => {
  if (response && response.data) {
      if(response.data.code === -1) {
        router.push({
          path:'/login'
        })
      }else return response.data
      
  } else {
      return response
  }
}, error => {
  console.log(error)
  return Promise.reject()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
