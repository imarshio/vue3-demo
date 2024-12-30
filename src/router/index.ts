import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/vue3/route/Home.vue";
import News from "@/components/vue3/route/News.vue";
import About from "@/components/vue3/route/About.vue";

const router = createRouter({
  // 路由器工作模式
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
