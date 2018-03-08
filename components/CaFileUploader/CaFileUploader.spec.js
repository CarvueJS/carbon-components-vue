import { shallow } from 'vue-test-utils';
import CaFileUploader from './CaFileUploader.vue';

describe('CaFileUploader', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaFileUploader);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
