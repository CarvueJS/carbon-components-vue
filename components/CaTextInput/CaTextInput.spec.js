import { shallow } from 'vue-test-utils';
import CaTextInput from './CaTextInput.vue';

describe('CaTextInput', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTextInput);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
