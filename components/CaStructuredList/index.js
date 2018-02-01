import CaStructuredList from './CaStructuredList';
import CaStructuredListBody from './CaStructuredListBody';
import CaStructuredListColumn from './CaStructuredListColumn';
import CaStructuredListHead from './CaStructuredListHead';
import CaStructuredListRow from './CaStructuredListRow';

CaStructuredList.install = (Vue) => {
  Vue.component(CaStructuredList.name, CaStructuredList);
  Vue.component(CaStructuredListBody.name, CaStructuredListBody);
  Vue.component(CaStructuredListColumn.name, CaStructuredListColumn);
  Vue.component(CaStructuredListHead.name, CaStructuredListHead);
  Vue.component(CaStructuredListRow.name, CaStructuredListRow);
};

export default CaStructuredList;
