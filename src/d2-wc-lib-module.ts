import { NgModule } from '@angular/core';
import { defineCustomElements } from '@d2-code/wc-lib/loader';

import { D2Argument } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  D2Argument
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class D2WcLibModule {}
