import { shallow } from 'vue-test-utils';
import CaContentSwitcher from './CaContentSwitcher.vue';
import CaContentSwitcherButton from './CaContentSwitcherButton.vue';

describe('CaContentSwitcher', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaContentSwitcher, { 
      slots: {
        default: CaContentSwitcherButton
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
