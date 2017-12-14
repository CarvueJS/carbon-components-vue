<template>
  <div data-checkbox class="bx--form-item bx--checkbox-wrapper">
    <input id="bx--checkbox-red" class="bx--checkbox" type="checkbox" value="red" name="checkbox">
    <label for="bx--checkbox-red" class="bx--checkbox-label">
      <span class="bx--checkbox-appearance">
        <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
          <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
        </svg>
      </span>
      Checkbox label 1
    </label>
  </div>
</template>

<script>
//  import { initCheckbox } from 'carbon-components';

  export default {
    name: 'ca-checkbox',
    data () {
      return {
        a: 'a'
      }
    },
    mounted () {
//      initCheckbox(document.querySelector[data-checkbox])
    }
  }
</script>

<style></style>
