import Vue from "vue";
import Example from "./example";
import prdOff from "./directive";

Vue.config.productionTip = false;

Vue.use(prdOff)
new Vue({
  render: (h) => h(Example),
}).$mount("#app");
