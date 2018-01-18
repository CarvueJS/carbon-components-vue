<template>
  <div id="app">
    <ca-button primary>Text</ca-button>


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


    <ca-accordion>
      <ca-accordion-item>
        <div slot="title">this is a title</div>
        <div slot="content"><p>this is a content</p></div>
      </ca-accordion-item>
    </ca-accordion>
    <ca-checkbox itemId="a" itemValue="a">item 1</ca-checkbox>
    <ca-checkbox itemId="b" itemValue="b">item 2</ca-checkbox>
    <ca-checkbox itemId="c" itemValue="c">item 3</ca-checkbox>
    <ca-breadcrumb>
      <ca-breadcrumb-item><a href="#">1</a></ca-breadcrumb-item>
      <ca-breadcrumb-item>2</ca-breadcrumb-item>
      <ca-breadcrumb-item>3</ca-breadcrumb-item>
    </ca-breadcrumb>


    <ca-radio>
      <ca-radio-item radioID="radio-button-1" value="value1">radio1</ca-radio-item>
      <ca-radio-item radioID="radio-button-2" value="value2" checked>radio2</ca-radio-item>
      <ca-radio-item radioID="radio-button-3" value="value3">radio3</ca-radio-item>

    </ca-radio>

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


    <ca-content-switcher>
      <ca-content-switcher-button>1</ca-content-switcher-button>
      <ca-content-switcher-button>2</ca-content-switcher-button>
      <ca-content-switcher-button>3</ca-content-switcher-button>
    </ca-content-switcher>

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


    <ca-date-picker></ca-date-picker>

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

    <ca-loading></ca-loading>

    <ca-file-uploader>up up</ca-file-uploader>

    <ca-number-input :max="200" :min="100" :value="2"></ca-number-input>

    <ca-form-item>
      <label for="text-area-2" class="bx--label">Text area label</label>
      <textarea id="text-area-2" class="bx--text-area" rows="4" cols="50" placeholder="Placeholder text"></textarea>
      <div class="bx--form-requirement">
        Please do not leave blank.
      </div>
    </ca-form-item>

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


    <ca-link>Link</ca-link>

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

    <ca-notification>
      <ca-notification-title>this is title</ca-notification-title>
      <ca-notification-subtitle>this is subtitle</ca-notification-subtitle>
    </ca-notification>

    <ca-progress-indicator>
      <ca-progress-indicator-step isCompleted>step1</ca-progress-indicator-step>
      <ca-progress-indicator-step isCurrent>step2</ca-progress-indicator-step>
      <ca-progress-indicator-step>step3</ca-progress-indicator-step>
      <ca-progress-indicator-step>step4</ca-progress-indicator-step>
    </ca-progress-indicator>
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
