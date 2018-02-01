/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .addWithJSX('normal', () => ({
    template: '<ca-button primary>Text</ca-button>',
  }));
