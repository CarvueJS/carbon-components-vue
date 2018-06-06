import { storiesOf } from '@storybook/vue';

storiesOf('Grid', module)
  .add('Default', () => ({
    template: `
    <ca-layout>
      <ca-flex col="x7">
        <div>test</div>
      </ca-flex>
      <ca-flex col="x5">
        test
      </ca-flex>
    </ca-layout>
    `,
  }));
