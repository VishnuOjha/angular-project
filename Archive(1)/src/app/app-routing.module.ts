import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './external/forgot/forgot.component';
import { LoginComponent } from './external/login/login.component';
import { ExternalAuthguardService } from './services/externalAuthguard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [ExternalAuthguardService] },
  { path: 'forgot-password', component: ForgotComponent, canActivate: [ExternalAuthguardService] },
  { path: '', loadChildren: () => import('./internal/internal.module').then(m => m.InternalModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
