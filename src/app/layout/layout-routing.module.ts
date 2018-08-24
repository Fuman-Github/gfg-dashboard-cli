import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
    {
      path: '',
      component: DashboardComponent,
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
