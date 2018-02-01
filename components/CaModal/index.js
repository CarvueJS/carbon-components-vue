import CaModal from './CaModal';
import CaModalContainer from './CaModalContainer';
import CaModalContent from './CaModalContent';
import CaModalHeader from './CaModalHeader';

CaModal.install = (Vue) => {
  Vue.component(CaModal.name, CaModal);
  Vue.component(CaModalContainer.name, CaModalContainer);
  Vue.component(CaModalContent.name, CaModalContent);
  Vue.component(CaModalHeader.name, CaModalHeader);
};

export default CaModal;
