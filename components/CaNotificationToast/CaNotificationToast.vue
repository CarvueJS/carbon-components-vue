<template>
  <div data-notification class="bx--toast-notification" :class="dynamicClass" role="alert">
    <div class="bx--toast-notification__details">
      <h3 class="bx--toast-notification__title">{{title}}</h3>
      <p class="bx--toast-notification__subtitle">{{subtitle}}</p>
      <p class="bx--toast-notification__caption">{{caption}}</p>
    </div>
    <button data-notification-btn class="bx--toast-notification__close-button" type="button">
      <svg class="bx--toast-notification__icon" aria-label="close" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd">
        <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
      </svg>
  </button>
</div>

</template>

<script>
export default {
  name: 'ca-notification-toast',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
  computed: {
    dynamicClass() {
      return {
        'bx--toast-notification--error': this.error,
        'bx--toast-notification--info': this.info,
        'bx--toast-notification--success': this.success,
        'bx--toast-notification--warning': this.warning,
      };
    },
  },
};
</script>

<style></style>
