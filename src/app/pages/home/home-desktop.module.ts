import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomeDesktopComponent } from './home.component.desktop';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/features/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeDesktopComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [
    HomeDesktopComponent,
    LoginComponent,
  ],
  entryComponents: [
    HomeDesktopComponent,
  ],
})
export class HomeDesktopModule { }
