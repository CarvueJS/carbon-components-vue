import { storiesOf } from '@storybook/vue';

storiesOf('Search', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-search></ca-search>
    `,
  }));
