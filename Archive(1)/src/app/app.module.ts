import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './external/login/login.component';
import { ForgotComponent } from './external/forgot/forgot.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { HttpService } from './services/http.service';
import { ExternalAuthguardService } from './services/externalAuthguard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    HttpService,
    ExternalAuthguardService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
