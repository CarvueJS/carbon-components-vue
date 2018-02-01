<template>
  <li class="bx--overflow-menu-options__option">
    <button class="bx--overflow-menu-options__btn">
      <slot></slot>
    </button>
  </li>
</template>

<script>
  export default {
    name: 'ca-overflow-menu-option',
  };
</script>
