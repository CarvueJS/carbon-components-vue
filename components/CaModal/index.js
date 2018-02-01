import CaModal from './CaModal.vue';
import CaModalContainer from './CaModalContainer.vue';
import CaModalContent from './CaModalContent.vue';
import CaModalHeader from './CaModalHeader.vue';

CaModal.install = (Vue) => {
  Vue.component(CaModal.name, CaModal);
  Vue.component(CaModalContainer.name, CaModalContainer);
  Vue.component(CaModalContent.name, CaModalContent);
  Vue.component(CaModalHeader.name, CaModalHeader);
};

export default CaModal;
