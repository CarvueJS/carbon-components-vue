import { storiesOf } from '@storybook/vue';

storiesOf('Loading', module)
  .add('Default', () => ({
    template: `
    <ca-loading></ca-loading>
    `,
  })).add('small', () => ({
    template: `
    <ca-loading small></ca-loading>
    `,
  })).add('withoutOverlay', () => ({
    template: `
    <ca-loading withoutOverlay></ca-loading>
    `,
  }))
  .add('with para', () => ({
    data: () => ({
      show: false,
    }),
    template: `
    <ca-tile>
      <ca-button primary @click.native="show = !show">click me!</ca-button>
      <ca-loading :show="show"></ca-loading>
    </ca-tile>
    `,
  }));
