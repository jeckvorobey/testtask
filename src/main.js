import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);

//стили
import "./assets/style/main.scss";

//импорт компонентов
import Footer from "./components/Footer.vue";
import LeftInfo from "./components/LeftInfo.vue";
import Btn from "./components/Btn.vue";

//Глобальная регистрация компонентов
Vue.component("v-footer", Footer);
Vue.component("v-leftinfo", LeftInfo);
Vue.component("v-btn", Btn);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
