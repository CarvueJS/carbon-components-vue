import CaBreadcrumb from './CaBreadcrumb';
import CaBreadcrumbItem from './CaBreadcrumbItem';

CaBreadcrumb.install = (Vue) => {
  Vue.component(CaBreadcrumb.name, CaBreadcrumb);
  Vue.component(CaBreadcrumbItem.name, CaBreadcrumbItem);
};

export default CaBreadcrumb;
