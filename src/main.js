import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);

//импорт компонентов
import Footer from "./components/Footer.vue";

//Глобальная регистрация компонентов
Vue.component("v-footer", Footer);

//стили
import "./assets/style/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
