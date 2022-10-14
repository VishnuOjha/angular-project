import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './admin-users.component';
import { AuthGuardService as AuthGuard } from 'src/app/services/authguard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './update-form/update-form.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: AdminUsersComponent,
      // canActivate: [AuthGuard],
      data: { title: 'Admin Users' }
    }
  ]
}]



@NgModule({
  declarations: [AdminUsersComponent, FormComponent, UpdateFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminUsersModule { }
