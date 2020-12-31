import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/main.scss";

import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "primevue/resources/themes/vela-orange/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";



const app = createApp(App);

app.use(PrimeVue)
  .use(store)
  .use(router);

// PrimeVue Component
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("Menubar", Menubar);

app.mount("#app");