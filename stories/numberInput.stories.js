import { storiesOf } from '@storybook/vue';

storiesOf('NumberInput', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-number-input :max="200" :min="100"></ca-number-input>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      model: 3,
    }),
    template: `
    <div>
      <ca-number-input :max="200" :min="100" v-model="model"></ca-number-input>
      {{model}}
    </div>
    `,
  }))
