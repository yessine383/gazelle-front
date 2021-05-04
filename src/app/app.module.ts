import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';


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
import { UserFormComponent } from './pages/user/user-form/user-form.component';

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent, FormContratComponent, UserFormComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [ClientService, authInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
