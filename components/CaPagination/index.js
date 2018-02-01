import CaPagination from './CaPagination.vue';
import CaPaginationItem from './CaPaginationItem.vue';

CaPagination.install = (Vue) => {
  Vue.component(CaPagination.name, CaPagination);
  Vue.component(CaPaginationItem.name, CaPaginationItem);
};

export default CaPagination;
