import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: About
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/temp",
    name: "Temp",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Temp.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/error",
    component: () => import("../views/Error.vue")
  },
  {
    path: "*",
    redirect: "/error"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
