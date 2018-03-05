import { storiesOf } from '@storybook/vue';

storiesOf('Search', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-search></ca-search>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      inputValue: 'test'
    }),
    template: `
    <div>
      <ca-search v-model="inputValue"></ca-search>
      {{inputValue}}
    </div>
    `,
  }));
