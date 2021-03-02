import {ClientID} from '../transaction/client.id';

export class ClientIdUtils {
  static clientIdValue = (clientID: ClientID | string) => {
    if (clientID instanceof ClientID) {
      return clientID.copy();
    }
    return new ClientID(clientID);
  };
}
