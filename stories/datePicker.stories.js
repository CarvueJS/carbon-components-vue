import { storiesOf } from '@storybook/vue';

storiesOf('DatePicker', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-date-picker placeholder="m/d/y" errorMessage="wrong!"></ca-date-picker>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      model: '',
    }),
    template: `
    <ca-tile>
      <ca-date-picker v-model="model" placeholder="m/d/y" errorMessage="wrong!"></ca-date-picker>
      {{model}}
    </ca-tile>
    `,
  }))
