import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
// import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    // FlexLayoutModule
  ],
  declarations: [LayoutComponent, HeaderComponent, NavMenuComponent, FooterComponent, MenuListItemComponent],
  providers: []
})
export class LayoutModule { }
