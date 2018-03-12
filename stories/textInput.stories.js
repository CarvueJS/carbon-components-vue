import { storiesOf } from '@storybook/vue';

storiesOf('TextInput', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-text-input placeholder="holder"></ca-text-input>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      model: 'text test',
    }),
    template: `
    <ca-tile>
      <ca-text-input placeholder="holder" v-model="model"></ca-text-input>
      model is {{model}}
    </ca-tile>
    `,
  }));
