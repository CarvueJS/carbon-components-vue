import CaSelect from './CaSelect.vue';
import CaSelectItem from './CaSelectItem.vue';
import CaSelectGroup from './CaSelectGroup.vue';

CaSelect.install = Vue => {
  Vue.component(CaSelect.name, CaSelect);
  Vue.component(CaSelectItem.name, CaSelectItem);
  Vue.component(CaSelectGroup.name, CaSelectGroup);
}

export default CaSelect
