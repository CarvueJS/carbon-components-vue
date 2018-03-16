/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('primary', () => ({
    template: '<ca-button primary>Text</ca-button>',
  }))
  .add('secondary', () => ({
    template: '<ca-button secondary>Text</ca-button>',
  }))
  .add('disable', () => ({
    template: '<ca-button secondary disabled>Text</ca-button>',
  }))
  .add('danger', () => ({
    template: '<ca-button danger>danger</ca-button>',
  }))
  .add('with icon', () => ({
    template: '<ca-button icon="icon--add" primary>with icon</ca-button>',
  }))
  .add('with listener', () => (
    {
      template: '<ca-button primary @click.native="hint++">click me! {{hint}}</ca-button>',
      data() {
        return {
          hint: 0,
        };
      },
    }
  ));
