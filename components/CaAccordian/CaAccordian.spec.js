import { shallow } from 'vue-test-utils';
import CaAccordian from './CaAccordian.vue';
import CaAccordianItem from './CaAccordianItem.vue';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaAccordian, { 
      slots: {
        default: CaAccordianItem
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
