import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashboardComponent } from '../features';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [LayoutComponent, HeaderComponent, NavMenuComponent, FooterComponent, DashboardComponent]
})
export class LayoutModule { }
