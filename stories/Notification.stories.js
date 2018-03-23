import { storiesOf } from '@storybook/vue';

storiesOf('Notification', module)
  .add('Default', () => ({
    template: `
    <ca-notification
      title="this is title"
      subtitle="this is subtitle"
      info
    >
    </ca-notification>
    `,
  }));
