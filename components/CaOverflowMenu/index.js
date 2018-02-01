import CaOverflowMenu from './CaOverflowMenu.vue';
import CaOverflowMenuOption from './CaOverflowMenuOption.vue';

CaOverflowMenu.install = (Vue) => {
  Vue.component(CaOverflowMenu.name, CaOverflowMenu);
  Vue.component(CaOverflowMenuOption.name, CaOverflowMenuOption);
};

export default CaOverflowMenu;
