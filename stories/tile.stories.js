import { storiesOf } from '@storybook/vue';

storiesOf('Tile', module)
  .add('Default', () => ({
    template: `
    <ca-tile>tile</ca-tile>
    `,
  }))
  .add('Clickable', () => ({
    data: () => ({
      text: 'tile',
    }),
    template: `
      <ca-tile :clickHandler="() => {text = 'tile has been clicked'}">{{text}}</ca-tile>
    `,
  }));
