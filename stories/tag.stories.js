import { storiesOf } from '@storybook/vue';

storiesOf('Tag', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-tag ibm>IBM</ca-tag>
    `,
  }));
