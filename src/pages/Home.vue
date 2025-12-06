<script setup>
import AppLayout from "@/components/AppLayout.vue";
import CocktailThumb from "@/components/CocktailThumb.vue";
import { useRootStore } from "@/stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore);

const getCocktails = () => {
  rootStore.getCocktails(rootStore.ingredient);
};

const removeIngredient = () => {
  rootStore.setIngredient(null);
};
</script>

<template>
  <AppLayout
    imgUrl="/src/assets/img/bg-1.jpg"
    :backFunction="removeIngredient"
    :is-back-button-visible="!!ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Выберите свой напиток</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Выберите основной ингредиент"
            size="large"
            filterable
            allow-create
            class="select"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Попробуйте наши рецепты вкусных коктейлей на любой случай жизни.
          Найдите рецепты вкусных коктейлей по ингредиентам с помощью нашего
          генератора коктейлей.
        </div>
        <img
          src="/src/assets/img/cocktails.png"
          alt="Cocktails"
          class="imgCocktails"
        />
      </div>
      <div v-else class="info">
        <div class="title">КОКТЕЙЛИ С {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'

.wrapper
  display: flex
  justify-content: center
  align-items: center

.info
  padding: 80px 0
  text-align: center
  position: relative

.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  max-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 30px
  letter-spacing: 0.1em
  color:$textMuted


.imgCocktails
  max-width: 345px
  position: absolute
  bottom: -50px
  left: 50%
  transform: translateX(-50%)
  z-index: 1

.cocktails
  display: flex
  align-items: center
  margin-top: 60px
  flex-wrap: wrap
  max-height: 400px
  overflow-y: auto
</style>
