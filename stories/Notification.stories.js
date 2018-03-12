import { storiesOf } from '@storybook/vue';

storiesOf('Notification', module)
  .add('Default', () => ({
    template: `
    <ca-notification>
      <ca-notification-title>this is title</ca-notification-title>
      <ca-notification-subtitle>this is subtitle</ca-notification-subtitle>
    </ca-notification>
    `,
  }));
