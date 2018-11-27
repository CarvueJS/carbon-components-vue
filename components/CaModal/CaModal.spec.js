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
          primaryHandler: () => {
            test = true;
          },
        },
      });
      wrapper.find('.bx--btn--primary').trigger('click');
      expect(test).toBe(true);
    });
  });

  describe('when secondary button is clicked', () => {
    test('call handler', () => {
      let test = false;
      const wrapper = shallow(CaModal, {
        propsData: {
          secondaryHandler: () => {
            test = true;
          },
        },
      });
      wrapper.find('.bx--btn--secondary').trigger('click');
      expect(test).toBe(true);
    });
  });

  describe('when close button is clicked', () => {
    test('call handler', () => {
      let test = false;
      const wrapper = shallow(CaModal, {
        propsData: {
          closeHandler: () => {
            test = true;
          },
        },
      });
      wrapper.find('.bx--modal-close').trigger('click');
      expect(test).toBe(true);
    });
  });
});
