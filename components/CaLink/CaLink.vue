<template>
  <a :href="href" class="bx--link">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'ca-link',
    props: {
      href: {
        type: String,
        default: '#'
      }
    }
  };
</script>

<style></style>
