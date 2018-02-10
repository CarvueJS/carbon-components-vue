<template>
  <nav class="bx--breadcrumb" :class="dynamicClass" aria-label="breadcrumb">
    <slot></slot>
  </nav>
</template>

<script>
  export default {
    name: 'ca-breadcrumb',
    props: {
      noSlash: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      dynamicClass () {
        return {
          'bx--breadcrumb--no-trailing-slash': this.noSlash
        }
      }
    }
  };
</script>

<style></style>
