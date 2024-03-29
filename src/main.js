import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import chartjs from "chart.js";
import "./assets/css/tailwind.css";
Vue.config.productionTip = false;

new Vue({
  router,
chartjs,
  render: (h) => h(App),
}).$mount("#app");
