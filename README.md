# Toaster & Alert Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Further help

To get more help on Toastr check out the [Angular Toastr - Easy Toasts for Angular](https://ngx-toastr.vercel.app) page.

To get more help on SweetAlert2 check out the [SweetAlert2 - a beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes](https://sweetalert2.github.io/#examples)

## Follow These Steps

- Add ngx-toastr and sweetalert2 by using `npm i ngx-toastr sweetalert2`
- Import ToastrService from ngx-toastr using `import { ToastrService } from 'ngx-toastr'`
- Add following code into `app.component.ts`
   ```
 constructor(private toastrService: ToastrService) { }
  // Toastr
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
  // SweetAlert2  
  showSuccessAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'This is a success message.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  showConfirmation() {
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
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  ```
- Use these function in app.component.html file on button click.

