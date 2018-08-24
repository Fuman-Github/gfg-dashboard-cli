import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'gfg-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Dashboard', icon: 'fa fa-fw fa-bar-chart'},
          {label: 'Administrative', icon: 'fa fa-fw fa-calendar'},
          {label: 'Documentation', icon: 'fa fa-fw fa-book'},
          {label: 'Support', icon: 'fa fa-fw fa-support'},
          {label: 'Social', icon: 'fa fa-fw fa-twitter'}
      ];

      this.activeItem = this.items[2];
  }

}
