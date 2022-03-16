import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
// ?tableParams=sort:-fullName|page:1|perPage=5|selection=id1,id2&filter=fullName:Vladis|birthDate:12.12.2012
