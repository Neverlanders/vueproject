import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const GStore = reactive({Message: ""})
createApp(App)
    .use(store)
    .use(router)
    .provide('GStore', GStore)
    .mount("#app");
