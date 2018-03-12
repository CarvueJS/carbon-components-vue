import { storiesOf } from '@storybook/vue';

storiesOf('Tooltip', module)
  .addWithJSX('Default', () => ({
    template: `
    <div>
      <ca-tooltip-trigger>
        Trigger
      </ca-tooltip-trigger>
      <ca-tooltip>
        <ca-tooltip-label>
          subTitle
        </ca-tooltip-label>
        <p>content!!!!!!</p>
      </ca-tooltip>
    </div>
    `,
  }));
