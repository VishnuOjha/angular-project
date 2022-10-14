import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SidebarComponent } from './base/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { InternalComponent } from './internal.component';
import { HeaderComponent } from './base/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from '../services/bootstrap/country.service';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [{
  path: '', component: InternalComponent,
  children: [
    {
      path: 'actions',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'api',
      loadChildren: () => import('./api/api.module').then(m => m.ApiModule)
    },
    {
      path: 'permission',
      loadChildren: () => import('./permission/permission.module').then(m => m.PermissionModule)
    },
    {
      path: 'admin_users',
      loadChildren: () => import('./admin-users/admin-users.module').then(m => m.AdminUsersModule)
    },
    {
      path: 'access_logs',
      loadChildren: () => import('./access-logs/access-logs.module').then(m => m.AccessLogsModule)
    }
  ]
}];

@NgModule({
  declarations: [
    InternalComponent,
    SidebarComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CountryService, DecimalPipe],
})
export class InternalModule { }
