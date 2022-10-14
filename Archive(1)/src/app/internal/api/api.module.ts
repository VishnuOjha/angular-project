import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'src/app/services/authguard.service';
import { AccessKeysComponent } from './access-keys/access-keys.component';
import { ResourceComponent } from './resource/resource.component';
import { OperationComponent } from './operation/operation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiComponent } from './api.component';
import { InnerApiComponent } from './inner-api/inner-api.component';
import { FormComponent } from './form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {
    path: '', children: [{
      path: '',
      component: InnerApiComponent,
      // canActivate: [AuthGuard],
      data: { title: 'Api' },
    }]
  },
  {
    path: 'access_keys', children: [{
      path: '',
      component: AccessKeysComponent,
      // canActivate: [AuthGuard],
      data: { title: 'Api' },
    }]
  },
  {
    path: 'resource', children: [{
      path: '',
      component: ResourceComponent,
      // canActivate: [AuthGuard],
      data: { title: 'Api' },
    }]
  },
  {
    path: 'operation', children: [{
      path: '',
      component: OperationComponent,
      // canActivate: [AuthGuard],
      data: { title: 'Api' },
    }]
  }
]



@NgModule({
  declarations: [
    ApiComponent,
    ResourceComponent,
    OperationComponent,
    InnerApiComponent,
    AccessKeysComponent,
    FormComponent,
    UpdateFormComponent
    // ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiModule { }
