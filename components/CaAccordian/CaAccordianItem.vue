<template>
  <li data-accordion-item class="bx--accordion__item">
    <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
      <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
        <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
      </svg>
      <p class="bx--accordion__title">Section 1 title </p>
    </button>
    <div id="pane1" class="bx--accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'ca-accordion-item',
  }
</script>

<style></style>
