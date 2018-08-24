import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule, TabMenu } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TabMenuModule,
    TabViewModule
  ],
  declarations: [LayoutComponent, HeaderComponent, NavMenuComponent, FooterComponent, DashboardComponent]
})
export class LayoutModule { }
