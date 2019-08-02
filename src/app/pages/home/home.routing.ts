import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDesktopComponent } from './home.component.desktop';

const routes: Routes = [
  {
    path: '',
    component: HomeDesktopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
