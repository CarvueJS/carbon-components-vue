<template>
  <div id="app">
    <ca-button primary>Text</ca-button>

    <div>-----------------------------</div>

    <ca-pagination>
      <ca-pagination-item slot="prePage">10</ca-pagination-item>
      <ca-pagination-item slot="prePage" selected>20</ca-pagination-item>
      <ca-pagination-item slot="prePage">30</ca-pagination-item>
      <ca-pagination-item slot="prePage">40</ca-pagination-item>

      <ca-pagination-item slot="page">1</ca-pagination-item>
      <ca-pagination-item slot="page" selected>2</ca-pagination-item>
      <ca-pagination-item slot="page">3</ca-pagination-item>
      <ca-pagination-item slot="page">4</ca-pagination-item>

    </ca-pagination>

    <div>-----------------------------</div>
    <ca-accordion>
      <ca-accordion-item>
        <div slot="title">this is a title</div>
        <div slot="content"><p>this is a content</p></div>
      </ca-accordion-item>
    </ca-accordion>

    <div>-----------------------------</div>
    <ca-checkbox itemId="a" itemValue="a">item 1</ca-checkbox>
    <ca-checkbox itemId="b" itemValue="b">item 2</ca-checkbox>
    <ca-checkbox itemId="c" itemValue="c">item 3</ca-checkbox>

    <div>-----------------------------</div>

    <ca-breadcrumb>
      <ca-breadcrumb-item><a href="#">1</a></ca-breadcrumb-item>
      <ca-breadcrumb-item>2</ca-breadcrumb-item>
      <ca-breadcrumb-item>3</ca-breadcrumb-item>
    </ca-breadcrumb>

    <div>-----------------------------</div>

    <ca-radio>
      <ca-radio-item radioID="radio-button-1" value="value1">radio1</ca-radio-item>
      <ca-radio-item radioID="radio-button-2" value="value2" checked>radio2</ca-radio-item>
      <ca-radio-item radioID="radio-button-3" value="value3">radio3</ca-radio-item>

    </ca-radio>

    <div>-----------------------------</div>
    <div>
      <ca-tooltip-trigger>
        Trigger
      </ca-tooltip-trigger>
      <ca-tooltip>
        <ca-tooltip-label>
          subTitle
        </ca-tooltip-label>
        <p>content!!!!!!</p>
      </ca-tooltip>
    </div>

    <div>-----------------------------</div>

    <ca-code-snippet>
      @mixin bx--snippet($type) {
  @if $type == 'terminal' {
    background-color: red;
  } @else if $type == 'code' {
    background-color: blue;
  } @else if $type == 'text' {
    background-color: white;
  }

  @if $type == 'terminal' {
    background-color: red;
  } @else if $type == 'code' {
    background-color: blue;
  } @else if $type == 'text' {
    background-color: white;
  }
}
    </ca-code-snippet>

    <div>-----------------------------</div>
    <ca-content-switcher>
      <ca-content-switcher-button>1</ca-content-switcher-button>
      <ca-content-switcher-button>2</ca-content-switcher-button>
      <ca-content-switcher-button>3</ca-content-switcher-button>
    </ca-content-switcher>

    <div>-----------------------------</div>

    <ca-data-table>
      <thead>

        <tr>
          <th>
            head1
          </th>
          <th>
            head2
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            itemA
          </th>
          <th>
            itemB
          </th>
        </tr>
        <tr>
          <th>
            itemE
          </th>
          <th>
            itemD
          </th>
        </tr>
      </tbody>
    </ca-data-table>

    <div>-----------------------------</div>
    <ca-date-picker></ca-date-picker>

    <div>-----------------------------</div>

    <ca-dropdown>
      <ca-dropdown-item value="date1">
        option1
      </ca-dropdown-item>
      <ca-dropdown-item value="data2" >
        option2
      </ca-dropdown-item>
      <ca-dropdown-item value="data3">
        option3
      </ca-dropdown-item>
    </ca-dropdown>

    <div>-----------------------------</div>

    <ca-loading></ca-loading>

    <div>-----------------------------</div>

    <ca-file-uploader>up up</ca-file-uploader>

    <div>-----------------------------</div>

    <ca-number-input :max="200" :min="100" :value="2"></ca-number-input>

    <div>-----------------------------</div>

    <ca-form-item>
      <label for="text-area-2" class="bx--label">Text area label</label>
      <textarea id="text-area-2" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text"></textarea>
      <div class="bx--form-requirement">
        Please do not leave blank.
      </div>
    </ca-form-item>

    <div>-----------------------------</div>

    <ca-overflow-menu>
      <ca-overflow-menu-option>
        option1
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        option2
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        option3
      </ca-overflow-menu-option>
      <ca-overflow-menu-option>
        option4
      </ca-overflow-menu-option>
    </ca-overflow-menu>

    <div>-----------------------------</div>

    <ca-link>Link</ca-link>

    <div>-----------------------------</div>

    <ca-list>
      <ca-list-item>
        Ordered List level 1
      </ca-list-item>
      <ca-list-item>
        Ordered List level 2
      </ca-list-item>
      <ca-list-item>
        Ordered List level 3
      </ca-list-item>
    </ca-list>

    <div>-----------------------------</div>

    <button class="bx--btn bx--btn--secondary" type="button" data-modal-target="#nofooter">Passive</button>
    <ca-modal>
      <ca-modal-container>
        <ca-modal-header>
          <p class="bx--modal-header__label bx--type-delta">Optional label</p>
          <p class="bx--modal-header__heading bx--type-beta">Modal heading</p>
          <button class="bx--modal-close" type="button" data-modal-close data-modal-primary-focus aria-label="close modal">
            <svg class="bx--modal-close__icon" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd">
              <title>Close Modal</title>
              <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
            </svg>
          </button>
        </ca-modal-header>
        <ca-modal-content>
          <p>Passive modal notifications should only appear if there is an action the user needs to address immediately. Passive
        modal notifications are persistent on the screen.</p>
        </ca-modal-content>
      </ca-modal-container>
    </ca-modal>

    <div>-----------------------------</div>

    <ca-notification>
      <ca-notification-title>this is title</ca-notification-title>
      <ca-notification-subtitle>this is subtitle</ca-notification-subtitle>
    </ca-notification>

    <div>-----------------------------</div>

    <ca-progress-indicator>
      <ca-progress-indicator-step isCompleted>step1</ca-progress-indicator-step>
      <ca-progress-indicator-step isCurrent>step2</ca-progress-indicator-step>
      <ca-progress-indicator-step>step3</ca-progress-indicator-step>
      <ca-progress-indicator-step>step4</ca-progress-indicator-step>
    </ca-progress-indicator>

    <div>-----------------------------</div>


    <ca-search></ca-search>

    <div>-----------------------------</div>

    <ca-select>
      <ca-select-item>Choose an option</ca-select-item>
      <ca-select-item value="solong">A much longer option that is worth having around to check how text flows</ca-select-item>
      <ca-select-group label="Category 1">
        <ca-select-item value="option1">11</ca-select-item>
        <ca-select-item value="option2">22</ca-select-item>
      </ca-select-group>
      <ca-select-group label="Category 22">
        <ca-select-item value="option3">33</ca-select-item>
        <ca-select-item value="option4">44</ca-select-item>
      </ca-select-group>
    </ca-select>

    <div>-----------------------------</div>

    <ca-slider :step="2" :min="2" :max="102" :value="41"></ca-slider>


    <div>-----------------------------</div>

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

    <div>-----------------------------</div>

    <ca-tag ibm>IBM</ca-tag>

    <div>-----------------------------</div>

    <ca-text-input placeholder="holder"></ca-text-input>

    <div>-----------------------------</div>

    <ca-tile>tile</ca-tile>

    <div>-----------------------------</div>

    <ca-toggle left="kai" right="guan"></ca-toggle>

  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
