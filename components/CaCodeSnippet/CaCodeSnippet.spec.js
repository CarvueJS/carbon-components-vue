import { shallow } from 'vue-test-utils';
import CaCodeSnippet from './CaCodeSnippet.vue';

describe('CaCodeSnippet', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaCodeSnippet);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
