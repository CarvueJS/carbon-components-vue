import { shallow } from 'vue-test-utils';
import CaAccordion from './CaAccordion.vue';
import CaAccordionItem from './CaAccordionItem.vue';

describe('CaAccordion', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaAccordion, { 
      slots: {
        default: CaAccordionItem
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
