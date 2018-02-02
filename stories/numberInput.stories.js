import { storiesOf } from '@storybook/vue';

storiesOf('NumberInput', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-number-input :max="200" :min="100" :value="2"></ca-number-input>
    `,
  }));
