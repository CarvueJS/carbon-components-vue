<template>
  <div class="bx--form-item">
    <div data-date-picker data-date-picker-type="single" class="bx--date-picker bx--date-picker--single">
      <div class="bx--date-picker-container">
        <label for="date-picker-3" class="bx--label">Date Picker label</label>
        <svg data-date-picker-icon class="bx--date-picker__icon" width="17" height="19" viewBox="0 0 17 19">
          <path d="M12 0h2v2.7h-2zM3 0h2v2.7H3z" />
          <path d="M0 2v17h17V2H0zm15 15H2V7h13v10z" />
          <path d="M9.9 15H8.6v-3.9H7.1v-.9c.9 0 1.7-.3 1.8-1.2h1v6z" />
        </svg>
        <input type="text" id="date-picker-3" class="bx--date-picker__input" :pattern="pattern" :placeholder="placeholder"
          data-date-picker-input />
        <div class="bx--form-requirement">
          {{errorMessage}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DatePicker } from 'carbon-components';

export default {
  name: 'ca-date-picker',
  props: {
    value: null,
    errorMessage: {
      type: String,
      default: 'Invalid date format.',
    },
    placeholder: {
      type: String,
      default: 'mm/dd/yyyy',
    },
    pattern: {
      type: String,
      default: '\d{1,2}/\d{1,2}/\d{4}',
    },
    onUpdate: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      datePicker: null,
    };
  },
  mounted() {
    const picker = this.$el.querySelector('[data-date-picker]');
    const instance = DatePicker.create(picker, {
      onValueUpdate: (selectedDates, dateStr, instance) => {
        this.onUpdate();
        this.$emit('input', dateStr);
      },
    });
  },
};
</script>

<style></style>
