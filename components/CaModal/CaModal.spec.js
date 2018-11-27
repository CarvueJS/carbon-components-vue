import { shallow } from 'vue-test-utils';
import CaModal from './CaModal.vue';

describe('CaModal', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaModal);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe('when primary button is clicked', () => {
    test('call handler', () => {
      let test = false;
      const wrapper = shallow(CaModal, {
        propsData: {
          confirmationHandler: () => {
            test = true;
          },
        },
      });
      wrapper.find('.bx--btn--primary').trigger('click');
      expect(test).toBe(true);
    });
  });
});
