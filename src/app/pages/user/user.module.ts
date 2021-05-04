import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [UserComponent],
  entryComponents: [UserFormComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
