import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccessLogsComponent } from './access-logs.component';
import { AuthGuardService as AuthGuard } from 'src/app/services/authguard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AccessLogsComponent,
        // canActivate: [AuthGuard],
        data: { title: 'Access Logs' }
      }
    ]
  }
]



@NgModule({
  declarations: [
    AccessLogsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessLogsModule { }
