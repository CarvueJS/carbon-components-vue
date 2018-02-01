import CaOverflowMenu from './CaOverflowMenu';
import CaOverflowMenuOption from './CaOverflowMenuOption';

CaOverflowMenu.install = (Vue) => {
  Vue.component(CaOverflowMenu.name, CaOverflowMenu);
  Vue.component(CaOverflowMenuOption.name, CaOverflowMenuOption);
};

export default CaOverflowMenu;
