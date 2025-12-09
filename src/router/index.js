import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import { ROUTER_PATHS } from "@/constants";
import Cocktail from "@/pages/Cocktail.vue";
import CocktailRandom from "@/pages/CocktailRandom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATHS.HOME,
      name: ROUTER_PATHS.HOME,
      component: Home,
    },
    {
      path: ROUTER_PATHS.COCTAIL,
      name: ROUTER_PATHS.COCTAIL,
      component: Cocktail,
    },
    {
      path: ROUTER_PATHS.COCTAIL_RANDOM,
      name: ROUTER_PATHS.COCTAIL_RANDOM,
      component: CocktailRandom,
    },
  ],
});

export default router;
