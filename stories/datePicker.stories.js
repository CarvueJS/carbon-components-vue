import { storiesOf } from '@storybook/vue';

storiesOf('DatePicker', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-date-picker></ca-date-picker>
    `,
  }));
