import { shallow } from 'vue-test-utils';
import CaDropdown from './CaDropdown.vue';
import CaDropdownItem from './CaDropdownItem.vue';

describe('CaDropdown', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaDropdown, { 
      slots: {
        default: CaDropdownItem
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
