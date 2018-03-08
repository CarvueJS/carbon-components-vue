import { shallow } from 'vue-test-utils';
import CaTooltip from './CaTooltip.vue';

describe('CaTooltip', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTooltip);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
