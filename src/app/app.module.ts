import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientService } from "./services/client.service";
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { FormContratComponent } from './pages/form-contrat/form-contrat.component';
import { AuthGuard } from './helpers/auth.guard';
import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent, FormContratComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: [ClientService, AuthGuard, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
