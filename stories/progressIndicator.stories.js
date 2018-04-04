import { storiesOf } from '@storybook/vue';

storiesOf('ProgressIndicator', module)
  .add('Default', () => ({
    data: () => ({
      step: 0,
    }),
    template: `
    <ca-progress-indicator :value="step">
      <ca-progress-indicator-step isCurrent>step1</ca-progress-indicator-step>
      <ca-progress-indicator-step isInComplete>step2</ca-progress-indicator-step>
      <ca-progress-indicator-step isInComplete>step3</ca-progress-indicator-step>
      <ca-progress-indicator-step isInComplete>step4</ca-progress-indicator-step>
    </ca-progress-indicator>
    `,
  }));
