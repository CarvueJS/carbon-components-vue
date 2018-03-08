import { shallow } from 'vue-test-utils';
import CaLink from './CaLink.vue';

describe('CaLink', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaLink);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
