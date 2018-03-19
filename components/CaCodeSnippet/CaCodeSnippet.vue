<template>
  <div class="bx--snippet" :class="dynamicClass">
    <div class="bx--snippet-container">
      <code>
      <pre>
        <slot>
        </slot>
      </pre>
      </code>
    </div>
    <button data-copy-btn class="bx--snippet-button" aria-label="Copy code" tabindex="0">
      <svg class="bx--snippet__icon" width="18" height="24" viewBox="0 0 18 24" fill-rule="evenodd">
        <path d="M13 5V0H0v19h5v5h13V5h-5zM2 17V2h9v3H5v12H2zm14 5H7V7h9v15z"></path>
        <path d="M9 9h5v2H9zM9 12h5v2H9zM9 15h3v2H9z"></path>
      </svg>
      <div class="bx--btn--copy__feedback" data-feedback="Copied!"></div>
    </button>
  </div>

</template>

<script>
  export default {
    name: 'ca-code-snippet',
    props: {
      type: {
        type: String,
        default: 'code'
      }
    },
    computed: {
      dynamicClass () {
        return {
          'bx--snippet--terminal': this.type === 'terminal',
          'bx--snippet--code': this.type === 'code',
        }
      }
    },
  };
</script>

<style></style>
