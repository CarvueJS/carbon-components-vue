<template>
  <div :class="overlayClass">
    <div data-loading class="bx--loading" :class="smallClass">
      <svg class="bx--loading__svg" viewBox="-75 -75 150 150">
        <title>Loading</title>
        <circle cx="0" cy="0" r="37.5" />
      </svg>
    </div>
  </div>
</template>

<script>
  import { Loading } from 'carbon-components';

  export default {
    data() {
      return {
        loading: null,
      };
    },
    props:{
      show: {
        type: Boolean,
        default: true
      },
      withoutOverlay: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      }
    },
    name: 'ca-loading',
    watch: {
      show (newValue) {
        this.loading.set(newValue)
      }
    },
    computed: {
      overlayClass () {
        return {
          'bx--loading-overlay': !this.withoutOverlay
        }
      },
      smallClass () {
        return {
          'bx--loading--small': this.small
        }
      }
    },
    mounted() {
      this.loading = Loading.create(this.$el.querySelector('[data-loading]'));
      this.loading.set(this.show);
    },
  };
</script>

<style></style>
