import CaBreadcrumb from './CaBreadcrumb.vue';
import CaBreadcrumbItem from './CaBreadcrumbItem.vue';

CaBreadcrumb.install = Vue => {
  Vue.component(CaBreadcrumb.name, CaBreadcrumb);
  Vue.component(CaBreadcrumbItem.name, CaBreadcrumbItem);
}

export default CaBreadcrumb
