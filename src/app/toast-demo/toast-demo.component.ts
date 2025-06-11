import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss']
})
export class ToastDemoComponent {
  constructor(private toastrService: ToastrService) { }
  showSuccess() {
    this.toastrService.success('Operation completed successfully!', 'Success');
  }

  showError() {
    this.toastrService.error('Something went wrong!', 'Error');
  }

  showInfo() {
    this.toastrService.info('This is an information message', 'Info');
  }

  showWarning() {
    this.toastrService.warning('This is a warning message', 'Warning');
  }

  showCustom() {
    this.toastrService.show(
      '<span style="color: #bd4147">Custom</span> <span style="color: #477abd">Toast</span>',
      'Styled Message',
      {
        enableHtml: true,
        toastClass: 'custom-toast-class',
        positionClass: 'toast-bottom-center'
      }
    );
  }

  clearToasts() {
    this.toastrService.clear();
  }

}
