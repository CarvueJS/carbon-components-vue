import { storiesOf } from '@storybook/vue';

storiesOf('Notification/inline', module)
  .add('info', () => ({
    template: `
    <ca-notification-inline
      title="this is title"
      subtitle="this is subtitle"
      info
    >
    </ca-notification-inline>
    `
  }))
  .add('error', () => ({
    template: `
    <ca-notification-inline
      title="this is title"
      subtitle="this is subtitle"
      error
    >
    </ca-notification-inline>
    `
  }))
  .add('success', () => ({
    template: `
    <ca-notification-inline
      title="this is title"
      subtitle="this is subtitle"
      success
    >
    </ca-notification-inline>
    `
  }))
  .add('warning', () => ({
    template: `
    <ca-notification-inline
      title="this is title"
      subtitle="this is subtitle"
      warning
    >
    </ca-notification-inline>
    `
  }))
  .add('with close handler', () => ({
    data: () => ({
      title: 'this is title'
    }),
    template: `
    <ca-notification-inline
      :title="title"
      subtitle="this is subtitle"
      info
      :closeHandler="() => {title = 'Close has been clicked'}"
    >
    </ca-notification-inline>
    `
  }));
