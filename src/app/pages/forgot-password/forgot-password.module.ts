import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordDesktopComponent } from 'src/app/features/forgot-password-desktop/forgot-password-desktop.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForgotPasswordComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [
    ForgotPasswordComponent,
    ForgotPasswordDesktopComponent,
  ],
})
export class ForgotPasswordModule { }
