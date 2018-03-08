import { shallow } from 'vue-test-utils';
import CaProgressIndicator from './CaProgressIndicator.vue';
import CaProgressIndicatorStep from './CaProgressIndicatorStep.vue';

describe('CaProgressIndicator', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaProgressIndicator, { 
      slots: {
        default: CaProgressIndicatorStep
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
