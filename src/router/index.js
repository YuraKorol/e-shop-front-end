import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: 'main'
    },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    meta: {
      layout: 'main'
    },
    component: () => import("@/views/Cart.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
