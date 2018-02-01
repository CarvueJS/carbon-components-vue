import CaList from './CaList.vue';
import CaListItem from './CaListItem.vue';

CaList.install = (Vue) => {
  Vue.component(CaList.name, CaList);
  Vue.component(CaListItem.name, CaListItem);
};

export default CaList;
