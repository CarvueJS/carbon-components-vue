import CaSelect from './CaSelect';
import CaSelectItem from './CaSelectItem';
import CaSelectGroup from './CaSelectGroup';

CaSelect.install = (Vue) => {
  Vue.component(CaSelect.name, CaSelect);
  Vue.component(CaSelectItem.name, CaSelectItem);
  Vue.component(CaSelectGroup.name, CaSelectGroup);
};

export default CaSelect;
