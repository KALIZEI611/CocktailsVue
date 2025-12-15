<script setup>
import { Back } from "@element-plus/icons-vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ROUTER_PATHS } from "@/constants";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunction: {
    type: Function,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);

const goForCoctailRandom = () => {
  if (routeName.value === ROUTER_PATHS.COCTAIL_RANDOM) {
    // Если уже на странице случайного коктейля, просто обновляем данные
    router.go(0); // перезагрузка страницы
  } else {
    // Иначе переходим на страницу случайного коктейля
    router.push(ROUTER_PATHS.COCTAIL_RANDOM);
  }
};

// УБРАТЬ эту строку, она вызывает бесконечный цикл!
// console.log(goForCoctailRandom());

const goBack = () => {
  if (props.backFunction) {
    props.backFunction();
  } else {
    router.go(-1);
  }
};
</script>

<template>
  <div class="root">
    <div :style="`background-image:url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="goBack"
        />
        <el-button class="btn" @click="goForCoctailRandom"
          >Выбрать рандомный коктейль</el-button
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.root
    display: flex
    min-height: 100vh
    background-color:$background

.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px

.btn
    position: absolute
    top: 32px
    right: 40px
    z-index: 100
    padding: 12px 24px
    font-size: 16px
    font-family: 'Releway','Arial',sans-serif
    background-color: $accent
    border-color:$accent
    color: $text
    &:hover,&:active
        background-color: darken($accent,15%)
        border-color:darken($accent,15%)

.btns
  display: flex
  justify-content: space-between
  align-items: center

.back
  background-color: transparent
  border-color: #fff

  &:hover
    border-color:$accent
</style>
