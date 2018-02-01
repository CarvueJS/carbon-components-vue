import CaDropdown from './CaDropdown.vue';
import CaDropdownItem from './CaDropdownItem.vue';

CaDropdown.install = (Vue) => {
  Vue.component(CaDropdown.name, CaDropdown);
  Vue.component(CaDropdownItem.name, CaDropdownItem);
};

export default CaDropdown;
