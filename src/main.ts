// 引入createApp
import { createApp } from "vue";
import router from "./router";
// 引入App根组件
import App from "./App.vue";

// 创建App
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载到app节点,mount挂载的app指的是App.vue中的id为app的节点
app.mount("#app");
