import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert2-demo',
  templateUrl: './sweetalert2-demo.component.html',
  styleUrls: ['./sweetalert2-demo.component.scss']
})
export class Sweetalert2DemoComponent {


  showSuccess() {
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
