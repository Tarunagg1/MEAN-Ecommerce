import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { throwAlreadyLoaded } from './utils/module-import-gard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthinteracaptorService } from './interacaptor/authinteracaptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinteracaptorService,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwAlreadyLoaded(parentModule, 'CoreModule');
  }
}
