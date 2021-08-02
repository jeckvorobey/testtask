import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

//библиотека barba.js
import barba from "../node_modules/@barba/core";
Object.defineProperty(Vue.prototype, "$barba", { value: barba });

Vue.use(BootstrapVue);

//стили
import "./assets/style/main.scss";

//импорт компонентов
import Footer from "./components/Footer.vue";
import LeftInfo from "./components/LeftInfo.vue";
import Btn from "./components/Btn.vue";
import BlockImg from "./components/BlockImg.vue";
import Form from "./components/Form.vue";

//Глобальная регистрация компонентов
Vue.component("v-footer", Footer);
Vue.component("v-leftinfo", LeftInfo);
Vue.component("v-btn", Btn);
Vue.component("v-blockimg", BlockImg);
Vue.component("v-form", Form);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
