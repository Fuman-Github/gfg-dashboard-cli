import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { LoaderComponent } from './loader/loader.component';
import { PrimengModule } from './primeng.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    PrimengModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent, MaterialModule, PrimengModule
  ]
})
export class SharedModule { }
