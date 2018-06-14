import vAjax from './ajax';
import vRouterStore from './router-store';
import { RSAKeyPair, encryptedString} from './rsa';

export default {
  axiosIns: vAjax,
  routerStore: vRouterStore,
  RSAKeyPair: RSAKeyPair,
  encryptedString: encryptedString
}