import CaRadio from './CaRadio.vue';
import CaRadioItem from './CaRadioItem.vue';

CaRadio.install = Vue => {
  Vue.component(CaRadio.name, CaRadio);
  Vue.component(CaRadioItem.name, CaRadioItem);
}

export default CaRadio
