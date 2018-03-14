import { shallow } from 'vue-test-utils';
import CaIcon from './CaIcon.vue';

describe('CaIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaIcon);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
