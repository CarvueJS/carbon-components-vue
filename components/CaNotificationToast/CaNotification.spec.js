import { shallow } from 'vue-test-utils';
import CaNotificationToast from './CaNotificationToast.vue';

describe('CaNotificationToast', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaNotificationToast);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaNotificationToast);
    expect(wrapper.html()).toMatchSnapshot()
  });
})
