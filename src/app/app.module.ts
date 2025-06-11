import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ToastaModule} from 'ngx-toasta';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastDemoComponent } from './toast-demo/toast-demo.component';
import { AlertifyDemoComponent } from './alertify-demo/alertify-demo.component';
import { Sweetalert2DemoComponent } from './sweetalert2-demo/sweetalert2-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastDemoComponent,
    AlertifyDemoComponent,
    Sweetalert2DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    }),
     ToastaModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
