<template>
  <li data-accordion-item class="bx--accordion__item">
    <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
      <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
        <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
      </svg>
      <p class="bx--accordion__title">
        <slot name="title"></slot>
      </p>
    </button>
    <div class="bx--accordion__content">
      <slot name="content"></slot>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'ca-accordion-item',
  };
</script>

<style></style>
