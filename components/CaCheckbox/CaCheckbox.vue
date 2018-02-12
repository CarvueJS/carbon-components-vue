<template>
  <div data-checkbox class="bx--form-item bx--checkbox-wrapper">
    <input :id="itemId" class="bx--checkbox" type="checkbox" name="checkbox" :checked="checked" :aria-checked="ariaChecked"/>
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
    props: {
      itemId: {
        type: String,
        default: '',
      },
      itemValue: {
        type: String,
        default: '',
      },
      checked: {
        type: Boolean,
        default: false
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
      modelValue: {
        get() {
          return this.itemValue
        },
        set(newVal) {
          this.$emit('update:itemValue', newVal)
        }
      },
      dynamicClass () {
        return {

        }
      }
    },
  };
</script>

<style></style>
