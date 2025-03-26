import { createApp } from "vue";
import App from "./App.vue";
import "tdesign-vue-next/es/style/index.css";
import TDesign from "tdesign-vue-next";
import router from "./router";
import VueEasymde from "vue3-easymde";
import "easymde/dist/easymde.min.css";

createApp(App).use(TDesign).use(router).use(VueEasymde).mount("#app");
