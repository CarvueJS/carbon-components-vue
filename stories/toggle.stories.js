import { storiesOf } from '@storybook/vue';

storiesOf('Toggle', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-toggle left="kai" right="guan"></ca-toggle>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      model: true,
    }),
    template: `
    <div>
      <ca-toggle left="off" right="on" v-model="model"></ca-toggle>
      model is {{model}}
    </div>
    `,
  }));
