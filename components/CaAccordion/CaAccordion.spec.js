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

  test('Mathes snapshot: pass title props', () => {
    const wrapper = shallow(CaAccordion, { 
      slots: {
        default: {
          render(h) {
            return h(CaAccordionItem, { props: { title: 'titleText' } })
          }
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot()
  });

  test('Mathes snapshot: pass activie props', () => {
    const wrapper = shallow(CaAccordion, { 
      slots: {
        default: {
          render(h) {
            return h(CaAccordionItem, { props: { active: true } })
          }
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot()
  });
})
