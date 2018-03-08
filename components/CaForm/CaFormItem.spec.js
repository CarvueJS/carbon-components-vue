import { shallow } from 'vue-test-utils';
import CaFormItem from './CaFormItem.vue';

describe('CaFormItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaFormItem);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
