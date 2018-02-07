/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .addWithJSX('primary', () => ({
    template: '<ca-button primary>Text</ca-button>',
  })).addWithJSX('secondary', () => ({
    template: '<ca-button secondary>Text</ca-button>',
  }));
