import {INotification} from './INotification';

export class MobilePushNotification implements INotification{
  public sendNotification(): string {
    return 'moblie users notified about new product'
  }

}