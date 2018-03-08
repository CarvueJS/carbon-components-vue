<template>
  <div class="bx--loading-overlay">
    <div data-loading class="bx--loading">
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
      show: false
    },
    name: 'ca-loading',
    watch: {
      show (newValue) {
        this.loading.set(newValue)
      }
    },
    mounted() {
      this.loading = Loading.create(this.$el.querySelector('[data-loading]'));
      this.loading.set(this.show);
    },
  };
</script>

<style></style>
