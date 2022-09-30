import {INotification} from './INotification';

export class Products {
  private list = [{ name: 'apple' }, { name: 'grape' }];
  private notification!:INotification;

  constructor(notification: INotification){
    this.notification = notification;
  }

  public createNewProduct(product:string) {
    this.list.push({name: product});
  }

  public getAll() {
    return this.list;
  }

  public sendNotification() {
    return this.notification.sendNotification();
  }
}
