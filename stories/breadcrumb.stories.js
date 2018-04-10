import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs/vue';

storiesOf('Breadcrumb', module)
  .add('Default', () => ({
    template: `
    <ca-breadcrumb>
      <ca-breadcrumb-item href="#">1</ca-breadcrumb-item>
      <ca-breadcrumb-item>2</ca-breadcrumb-item>
      <ca-breadcrumb-item>3</ca-breadcrumb-item>
    </ca-breadcrumb>
    `,
  })).add('without last Slash', () => {
    const noSlash = boolean('noSlash', true);
    return {
      template: `
      <ca-breadcrumb :noSlash="${noSlash}">
        <ca-breadcrumb-item href="#">1</ca-breadcrumb-item>
        <ca-breadcrumb-item>2</ca-breadcrumb-item>
        <ca-breadcrumb-item>3</ca-breadcrumb-item>
      </ca-breadcrumb>
      `,
    };
  });
