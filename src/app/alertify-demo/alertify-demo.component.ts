import { Component } from '@angular/core';
import { AlertifyService } from './alertify.service';

@Component({
  selector: 'app-alertify-demo',
  templateUrl: './alertify-demo.component.html',
  styleUrls: ['./alertify-demo.component.scss']
})
export class AlertifyDemoComponent {

  constructor(private alertify: AlertifyService) { }

  showSuccess() {
    this.alertify.success('Action completed!');
  }

  showConfirmation() {
    this.alertify.confirm(
      'Confirm Delete',
      'Are you sure?',
      () => this.deleteItem()
    );
  }

  deleteItem() {
    console.log('Invoke Delete!');
  }

}
