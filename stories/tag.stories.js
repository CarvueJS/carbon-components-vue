import { storiesOf } from '@storybook/vue';

storiesOf('Tag', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-tag ibm>IBM</ca-tag>
    `,
  }));
