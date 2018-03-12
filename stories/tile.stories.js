import {storiesOf} from "@storybook/vue"

storiesOf('Tile', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-tile>tile</ca-tile>
    `,
  }));
