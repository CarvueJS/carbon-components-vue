import CaNotification from './CaNotification';
import CaNotificationTitle from './CaNotificationTitle';
import CaNotificationSubtitle from './CaNotificationSubtitle';

CaNotification.install = (Vue) => {
  Vue.component(CaNotification.name, CaNotification);
  Vue.component(CaNotificationTitle.name, CaNotificationTitle);
  Vue.component(CaNotificationSubtitle.name, CaNotificationSubtitle);
};

export default CaNotification;
