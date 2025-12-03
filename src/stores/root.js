import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCKTAILS_URL } from "@/constants";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    cocktails: [],
  }),
  actions: {
    async getIngredients() {
      try {
        const response = await axios.get(INGREDIENTS_URL);
        this.ingredients = response.data.drinks || [];
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    },
    async getCocktails(ingredient) {
      try {
        const response = await axios.get(`${COCKTAILS_URL}${ingredient}`);
        this.cocktails = response.data.drinks || [];
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    },
  },
});
