import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
    { path: '', loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'},
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
