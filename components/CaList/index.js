import CaList from './CaList';
import CaListItem from './CaListItem';

CaList.install = (Vue) => {
  Vue.component(CaList.name, CaList);
  Vue.component(CaListItem.name, CaListItem);
};

export default CaList;
