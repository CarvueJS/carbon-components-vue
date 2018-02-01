import CaStructuredList from './CaStructuredList.vue';
import CaStructuredListBody from './CaStructuredListBody.vue';
import CaStructuredListColumn from './CaStructuredListColumn.vue';
import CaStructuredListHead from './CaStructuredListHead.vue';
import CaStructuredListRow from './CaStructuredListRow.vue';

CaStructuredList.install = (Vue) => {
  Vue.component(CaStructuredList.name, CaStructuredList);
  Vue.component(CaStructuredListBody.name, CaStructuredListBody);
  Vue.component(CaStructuredListColumn.name, CaStructuredListColumn);
  Vue.component(CaStructuredListHead.name, CaStructuredListHead);
  Vue.component(CaStructuredListRow.name, CaStructuredListRow);
};

export default CaStructuredList;
