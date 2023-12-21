<template>
  <button
    :class="[props.disabled ? 'v-button disabled' : 'v-button']"
    @click.prevent="props.onClick"
    :disabled="props.disabled"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },

  onClick: {
    type: Function,
    default: () => {},
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.v-button {
  width: 100%;
  font-size: 14px;
  padding: 15px 50px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 40, 85, 1);
  border: none;
  border-radius: 100px;
  user-select: none;
  cursor: pointer;
  text-align: center;
  word-break: break-word;

  @media (hover: hover) {
    &:hover {
      background-color: rgb(52, 126, 212);
    }
  }

  @media screen and (min-width: 768px) {
    width: 35%;
  }

  @media screen and (min-width: 1024px) {
    width: 26%;
  }

  @media screen and (min-width: 1200px) {
    width: 20%;
  }
}

.disabled {
  background-color: gray !important;
  pointer-events: none;
}
</style>
