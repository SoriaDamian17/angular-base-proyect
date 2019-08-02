import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NavigatorService } from './core/utils/services/navigator.service';

const commonsRoutes: Routes = [
  {
    path: 'not-found',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule',
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'not-found' },
];

export const desktopRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home-desktop.module#HomeDesktopModule',
  },
  {
    path: 'login',
    loadChildren: './pages/home/home-desktop.module#HomeDesktopModule',
  },
  {
    path: 'forgot-password',
    loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  ...commonsRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot([...desktopRoutes], {
      enableTracing: true,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
