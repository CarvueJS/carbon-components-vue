import { shallow } from 'vue-test-utils';
import CaProgressIndicator from './CaProgressIndicator.vue';
import CaProgressIndicatorStep from './CaProgressIndicatorStep.vue';

describe('CaProgressIndicator', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaProgressIndicator, { 
      slots: {
        default: {
          render(h) {
            return h(CaProgressIndicatorStep, { props: { isCurrent: true } })
          }
        }
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaProgressIndicator, { 
      slots: {
        default: {
          render(h) {
            return h(CaProgressIndicatorStep, { props: { isCurrent: true } })
          }
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot()
  });
})
