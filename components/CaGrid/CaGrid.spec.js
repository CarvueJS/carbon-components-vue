import { shallow } from 'vue-test-utils';
import CaContainer from './CaContainer.vue';

describe('CaContainer', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaContainer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
