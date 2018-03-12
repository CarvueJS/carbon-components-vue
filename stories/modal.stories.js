import { storiesOf } from '@storybook/vue';

storiesOf('Modal', module)
  .add('Default', () => ({
    template: `
    <ca-tile>
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
    </ca-tile>
    `,
  }));
