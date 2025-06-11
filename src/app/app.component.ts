import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toastr and alert';

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

    showSuccessAlert() {
      // this.alertify.success('Action completed!');
      Swal.fire({
        title: 'Success!',
        text: 'This is a success message.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  

  showConfirmation() {
      // this.alertify.confirm(
      //   'Confirm Delete',
      //   'Are you sure?',
      //   () => this.deleteItem()
      // );
  
       Swal.fire({
        title: 'Are you sure?',
        text: 'You won’t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem();
        }
      });
    }
  
    deleteItem() {
      Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
    }

}
