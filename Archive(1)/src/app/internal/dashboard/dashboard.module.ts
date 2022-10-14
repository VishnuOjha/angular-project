import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardService as AuthGuard } from 'src/app/services/authguard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        component: DashboardComponent,
        // canActivate: [AuthGuard],
        data: { title: 'Dashboard' },
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
