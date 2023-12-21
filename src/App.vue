<template>
  <router-view />
</template>

<script setup lang="ts">
import "@/assets/scss/global.scss";
import { useFormStore } from "./store/form";
import { computed, watch, watchEffect } from "vue";

const store = useFormStore();

const selectedAnswers = computed(() => store.GET_SELECTED_ANSWERS);
</script>

<style></style>
