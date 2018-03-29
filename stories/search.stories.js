import { storiesOf } from '@storybook/vue';

storiesOf('Search', module)
  .add('Default', () => ({
    template: `
    <ca-search></ca-search>
    `,
  })).add('with model', () => ({
    data: () => ({
      inputValue: 'test',
    }),
    template: `
    <ca-tile>
      <ca-search v-model="inputValue"></ca-search>
      {{inputValue}}
    </ca-tile>
    `,
  }));
