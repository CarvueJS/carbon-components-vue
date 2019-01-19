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

  test('match snapshot with custom label', () => {
    const wrapper = shallow(CaDropdown, {
      defaultText: 'Hello World'
    });
    expect(wrapper).toMatchSnapshot();
  });
});
