<template>
  <div class="bx--breadcrumb-item">
    <a :href="href" class="bx--link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'ca-breadcrumb-item',
    props: {
      href: {
        type: String,
        default: '#'
      }
    }
  };
</script>

<style></style>
