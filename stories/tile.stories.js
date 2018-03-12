import {storiesOf} from "@storybook/vue"

storiesOf('Tile', module)
  .add('Default', () => ({
    template: `
    <ca-tile>tile</ca-tile>
    `,
  }));
