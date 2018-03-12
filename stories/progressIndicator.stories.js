import { storiesOf } from '@storybook/vue';

storiesOf('ProgressIndicator', module)
  .add('Default', () => ({
    template: `
    <ca-progress-indicator>
      <ca-progress-indicator-step isCompleted>step1</ca-progress-indicator-step>
      <ca-progress-indicator-step isCurrent>step2</ca-progress-indicator-step>
      <ca-progress-indicator-step>step3</ca-progress-indicator-step>
      <ca-progress-indicator-step>step4</ca-progress-indicator-step>
    </ca-progress-indicator>
    `,
  }));
