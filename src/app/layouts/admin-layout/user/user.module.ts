import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../../services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { UsersListComponent } from './users-list/users-list.component';



const MODULES = [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule, SharedModule, ToastrModule];
const COMPONENTS = [];
@NgModule({
  declarations: [UserComponent, UserFormComponent, FilterSearchPipe, UsersListComponent],
  entryComponents: [UserFormComponent],
  imports: [...MODULES],
  providers: [FilterSearchPipe],
  exports: [UserService],
})
export class UserModule {}
