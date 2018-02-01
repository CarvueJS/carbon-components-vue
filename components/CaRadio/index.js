import CaRadio from './CaRadio';
import CaRadioItem from './CaRadioItem';

CaRadio.install = (Vue) => {
  Vue.component(CaRadio.name, CaRadio);
  Vue.component(CaRadioItem.name, CaRadioItem);
};

export default CaRadio;
