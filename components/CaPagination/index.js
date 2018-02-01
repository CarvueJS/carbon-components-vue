import CaPagination from './CaPagination';
import CaPaginationItem from './CaPaginationItem';

CaPagination.install = (Vue) => {
  Vue.component(CaPagination.name, CaPagination);
  Vue.component(CaPaginationItem.name, CaPaginationItem);
};

export default CaPagination;
