import { shallow } from 'vue-test-utils';
import CaTile from './CaTile.vue';

describe('CaTile', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaTile);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaTile);
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when clickable', () => {
    describe('when clicked', () => {
      test('call handler', () => {
        let test = false;
        const wrapper = shallow(CaTile, {
          propsData: {
            clickHandler: () => {
              test = true;
            },
          },
        });
        wrapper.trigger('click');
        expect(test).toBe(true);
      });
    });

    test('containes bx--tile--clickable class', () => {
      const wrapper = shallow(CaTile, {
        propsData: {
          clickHandler: () => {

          },
        },
      });
      expect(wrapper.classes().indexOf('bx--tile--clickable')).not.toBe(-1);
    });
  });
});
