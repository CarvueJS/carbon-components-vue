import {storiesOf} from "@storybook/vue"

storiesOf('Tile', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-tile>tile</ca-tile>
    `,
  }));
