import {storiesOf} from "@storybook/vue"

storiesOf('Breadcrumb', module)
  .addWithJSX('Default', () => ({
    template: `
    <ca-breadcrumb>
      <ca-breadcrumb-item><a href="#">1</a></ca-breadcrumb-item>
      <ca-breadcrumb-item>2</ca-breadcrumb-item>
      <ca-breadcrumb-item>3</ca-breadcrumb-item>
    </ca-breadcrumb>
    `,
  })).addWithJSX('without last Slash', () => ({
    template: `
    <ca-breadcrumb noSlash="true">
      <ca-breadcrumb-item><a href="#">1</a></ca-breadcrumb-item>
      <ca-breadcrumb-item>2</ca-breadcrumb-item>
      <ca-breadcrumb-item>3</ca-breadcrumb-item>
    </ca-breadcrumb>
    `,
  }))
