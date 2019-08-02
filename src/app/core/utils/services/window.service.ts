import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class WindowService {
  private _window: Window;

  constructor(
    @Inject(PLATFORM_ID) platformId: any,
    @Optional() @Inject('userAgent') private userAgent: string,
  ) {
    if (isPlatformServer(platformId)) {
      this._window = {
        navigator: { userAgent },
        getComputedStyle: (element, pseudoElt) => new Object(),
      } as Window;
    } else {
      this._window = window;
    }
  }

  get nativeWindow(): any {
    return this._window;
  }
}
