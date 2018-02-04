import { storiesOf } from '@storybook/vue';

storiesOf('Tabs', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-tabs>
      <ca-tabs-nav slot="nav" controls="tab-panel-1" :selected="`true`" tabID=".tab-1" >Tab label 1</ca-tabs-nav>
      <ca-tabs-nav slot="nav" controls="tab-panel-2" tabID=".tab-2">Tab label 2</ca-tabs-nav>
      <ca-tabs-nav slot="nav" controls="tab-panel-3" tabID=".tab-3">Tab label 3</ca-tabs-nav>
      <ca-tabs-nav slot="nav" controls="tab-panel-4" tabID=".tab-4">Tab label 4</ca-tabs-nav>
      <ca-tabs-panel slot="panel" PanelID="tab-panel-1" tabID="tab-1" :ariaHidden="false" :hidden="false"><p>Content for 1 tab goes here.</p></ca-tabs-panel>
      <ca-tabs-panel slot="panel" PanelID="tab-panel-2" tabID="tab-2"><p>Content for 2 tab goes here.</p></ca-tabs-panel>
      <ca-tabs-panel slot="panel" PanelID="tab-panel-3" tabID="tab-3"><p>Content for 3 tab goes here.</p></ca-tabs-panel>
      <ca-tabs-panel slot="panel" PanelID="tab-panel-4" tabID="tab-4"><p>Content for 4 tab goes here.</p></ca-tabs-panel>
    </ca-tabs>
    `,
  }));
