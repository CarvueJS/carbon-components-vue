<template>
  <div data-checkbox class="bx--form-item bx--checkbox-wrapper">
    <input :id="itemId" class="bx--checkbox" type="checkbox" @change="toggle" name="checkbox" :aria-checked="ariaChecked" :value="itemValue"/>
    <label :for="itemId" class="bx--checkbox-label">
      <span class="bx--checkbox-appearance">
        <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
          <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
        </svg>
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<script>

  export default {
    name: 'ca-checkbox',
    model: {
      prop: 'inputValue',
      event: 'inputValueChange'
    },
    props: {
      inputValue: {
        type: Array,
        default: ''
      },
      itemId: {
        type: String,
        default: '',
      },
      itemValue: {
        type: String,
        default: '',
      },
      mixed: {
        type: Boolean,
        default: false,
      },
      ariaChecked: {
        type: String,
        default: 'false'
      }
    },
    computed: {
      dynamicClass () {
        return {

        }
      }
    },
    methods: {
      toggle () {
        let input = this.inputValue.slice()
        let i = input.indexOf(this.itemValue)
        if (i === -1) {
          input.push(this.itemValue)
        } else {
          input.splice(i, 1)
        }
        this.$emit('inputValueChange', input)
      },
    },
  };
</script>

<style></style>
