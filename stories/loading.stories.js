import { storiesOf } from '@storybook/vue';

storiesOf('Loading', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-loading></ca-loading>
    `,
  }));
