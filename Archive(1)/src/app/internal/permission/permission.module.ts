import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'src/app/services/authguard.service';
import { RolesComponent } from './roles/roles.component';
import { PoliciesComponent } from './policies/policies.component';
import { InnerPermissionComponent } from './inner-permission/inner-permission.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
// import { RightSidebarComponent } from 'src/app/shared/right-sidebar/right-sidebar.component';
// import { ListComponent } from 'src/app/shared/list/list.component';
// import { UpdateSidebarComponent } from 'src/app/shared/update-sidebar/update-sidebar.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: 'roles',
    component: RolesComponent,
    // canActivate: [AuthGuard],
    data: { title: 'Roles' }

  },
  {
    path: 'policies',
    component: PoliciesComponent,
    data: { title: 'Policies' }
  },
  {
    path: '',
    component: InnerPermissionComponent,
    data: { title: 'Permission' }
  }
  ]
}]



@NgModule({
  declarations: [
    PermissionComponent,
    RolesComponent,
    PoliciesComponent,
    InnerPermissionComponent,
    FormComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PermissionModule { }
