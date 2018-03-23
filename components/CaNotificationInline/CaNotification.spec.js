import { shallow } from 'vue-test-utils';
import CaNotification from './CaNotificationInline.vue';

describe('CaNotification', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaNotification);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
