import { shallow } from 'vue-test-utils';
import CaOverflowMenu from './CaOverflowMenu.vue';
import CaOverflowMenuOption from './CaOverflowMenuOption.vue';

describe('CaOverflowMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaOverflowMenu, { 
      slots: {
        default: CaOverflowMenuOption
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaOverflowMenu, { 
      slots: {
        default: CaOverflowMenuOption
      }
    });
    expect(wrapper.html()).toMatchSnapshot()
  });
})
