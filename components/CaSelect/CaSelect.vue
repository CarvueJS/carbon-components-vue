<template>
  <div class="bx--select">
    <select id="select-id" class="bx--select-input">
      <slot></slot>
    </select>
    <svg class="bx--select__arrow" width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
      <path d="M10 0L5 5 0 0z"></path>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'ca-select',
  };
</script>
