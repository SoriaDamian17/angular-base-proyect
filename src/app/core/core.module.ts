import { NgModule, Optional, SkipSelf, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from './http/http.service';
import { ErrorInterceptor } from './http/error.interceptor';
import { CoreUtilModule } from './utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CoreUtilModule,
  ],
  providers: [
    {
      provide: HttpClient,
      useClass: HttpService,
    },
    ErrorInterceptor,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
