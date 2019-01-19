import { shallow } from 'vue-test-utils';
import CaNotification from './CaNotificationInline.vue';

describe('CaNotification', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaNotification);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('is a Vue instance with closeHandler', () => {
    let test = false;
    const wrapper = shallow(CaNotification, {
      propsData: {
        closeHandler: () => {
          test = true;
        }
      }
    });
    wrapper.find('button').trigger('click');
    expect(test).toBe(true);
  });
});
