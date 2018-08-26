import { NgModule } from '@angular/core';

import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  imports: [
    // TabMenuModule,
    // TabViewModule
],
  exports: [
     TabMenuModule,
     TabViewModule
  ]
})
export class PrimengModule { }
