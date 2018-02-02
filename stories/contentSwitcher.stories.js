import { storiesOf } from '@storybook/vue';

storiesOf('contentSwitcher', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-content-switcher>
      <ca-content-switcher-button>1</ca-content-switcher-button>
      <ca-content-switcher-button>2</ca-content-switcher-button>
      <ca-content-switcher-button>3</ca-content-switcher-button>
    </ca-content-switcher>
    `,
  }));
