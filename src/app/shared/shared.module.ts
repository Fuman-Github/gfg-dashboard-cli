import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { LoaderComponent } from './loader/loader.component';
import { PrimengModule } from './primeng.module';
import { LayoutModule } from '@angular/cdk/layout';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    PrimengModule,
    LayoutModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    LayoutModule,

    LoaderComponent, MaterialModule, PrimengModule
  ]
})
export class SharedModule { }
