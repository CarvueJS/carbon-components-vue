import CaDropdown from './CaDropdown';
import CaDropdownItem from './CaDropdownItem';

CaDropdown.install = (Vue) => {
  Vue.component(CaDropdown.name, CaDropdown);
  Vue.component(CaDropdownItem.name, CaDropdownItem);
};

export default CaDropdown;
