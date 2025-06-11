// alertify.service.ts
import { Injectable } from '@angular/core';
//import * as alertify from 'alertifyjs';
 declare const alertify: any; // Manual declaration

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() {
    this.initializeAlertify();
  }

  private initializeAlertify() {
    alertify.set('notifier', 'position', 'top-right');
    alertify.defaults = {
      autoReset: true,
      closable: true,
      transition: 'zoom'
    };
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  confirm(title: string, message: string, okCallback: () => void) {
    alertify.confirm(title, message, okCallback, () => {});
  }

  alert(title: string, message: string, callback?: () => void) {
    alertify.alert(title, message, callback || (() => {}));
  }

  prompt(title: string, message: string, defaultValue: string, okCallback: (value: string) => void) {
    alertify.prompt(title, message, defaultValue, 
      (evt: any, value: string) => okCallback(value), 
      () => {}
    );
  }
}