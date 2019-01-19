<template>
  <div class="bx--snippet" :class="dynamicClass">
    <div class="bx--snippet-container">
      <code>
        <pre class="code-snippet-code-content">
        <slot>
        </slot>
      </pre>
      </code>
    </div>
    <button
      @click="copyCode()"
      data-copy-btn
      class="bx--snippet-button"
      aria-label="Copy code"
      tabindex="0"
    >
      <svg class="bx--snippet__icon" width="18" height="24" viewBox="0 0 18 24" fill-rule="evenodd">
        <path d="M13 5V0H0v19h5v5h13V5h-5zM2 17V2h9v3H5v12H2zm14 5H7V7h9v15z"></path>
        <path d="M9 9h5v2H9zM9 12h5v2H9zM9 15h3v2H9z"></path>
      </svg>
      <div
        :class="{'bx--btn--copy__feedback--displayed': showFeedback}"
        class="bx--btn--copy__feedback"
        data-feedback="Copied!"
      ></div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ca-code-snippet',
  props: {
    type: {
      type: String,
      default: 'code',
    },
  },
  data: () => ({
    showFeedback: false,
  }),
  computed: {
    dynamicClass() {
      return {
        'bx--snippet--terminal': this.type === 'terminal',
        'bx--snippet--code': this.type === 'code',
      };
    },
  },
  methods: {
    copyCode() {
      const emailLink = document.querySelector('.code-snippet-code-content');
      const range = document.createRange();
      range.selectNode(emailLink);
      window.getSelection().addRange(range);

      try {
        // Now that we've selected the anchor text, execute the copy command
        if (document.execCommand('copy')) {
          this.$data.showFeedback = true;
          setTimeout(() => {
            this.$data.showFeedback = false;
          }, 2000);
        }
      } catch (err) {
        //
      }
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<style></style>
