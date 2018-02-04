import { storiesOf } from '@storybook/vue';

storiesOf('Notification', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-notification>
      <ca-notification-title>this is title</ca-notification-title>
      <ca-notification-subtitle>this is subtitle</ca-notification-subtitle>
    </ca-notification>
    `,
  }));
