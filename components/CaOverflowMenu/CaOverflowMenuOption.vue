<template>
  <li class="bx--overflow-menu-options__option">
    <button class="bx--overflow-menu-options__btn" @click="onClick">
      <slot></slot>
    </button>
  </li>
</template>

<script>
export default {
  name: 'ca-overflow-menu-option',
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
