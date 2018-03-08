import { shallow } from 'vue-test-utils';
import CaRadio from './CaRadio.vue';

describe('CaRadio', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaRadio);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
