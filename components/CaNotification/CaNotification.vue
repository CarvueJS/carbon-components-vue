<template>
  <div data-notification class="bx--inline-notification bx--inline-notification--error" role="alert">
    <div class="bx--inline-notification__details">
      <svg class="bx--inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM5.1 13.3L3.5 12 11 2.6l1.5 1.2-7.4 9.5z"></path>
      </svg>
      <div class="bx--inline-notification__text-wrapper">
        <slot></slot>
      </div>
    </div>
    <button data-notification-btn class="bx--inline-notification__close-button" type="button">
      <svg class="bx--inline-notification__close-icon" aria-label="close" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd">
        <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
      </svg>
    </button>
  </div>

</template>

<script>
  export default {
    name: 'ca-notification'
  }
</script>

<style></style>
