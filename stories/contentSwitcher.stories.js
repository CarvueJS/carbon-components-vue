import {storiesOf} from "@storybook/vue"

storiesOf('contentSwitcher', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-content-switcher @selected="selected">
      <ca-content-switcher-button switchValue="item1">1</ca-content-switcher-button>
      <ca-content-switcher-button switchValue="item2">2</ca-content-switcher-button>
      <ca-content-switcher-button switchValue="item3">3</ca-content-switcher-button>
    </ca-content-switcher>
    `,
    methods: {
      selected(item) {
        console.log(item);
      },
    },
  }));
