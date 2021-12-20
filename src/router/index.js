import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TicketDetails from "../views/Ticket/Details";
import TicketEdit from "../views/Ticket/Edit";
import TicketLayout from "../views/Layout";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/event/:id",
    name: "TicketLayout",
    props: true,
    component: TicketLayout,
    children: [
      {
        path: "",
        name: "TicketDetails",
        component: TicketDetails,
      },
      {
        path: "/edit",
        name: "TicketEdit",
        component: TicketEdit,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
