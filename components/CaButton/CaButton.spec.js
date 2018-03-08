import { shallow } from 'vue-test-utils';
import CaButton from './CaButton.vue';

describe('CaButton', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
