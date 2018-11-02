import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from "./user.routing";

import { UserComponent } from './user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditInfoComponent } from './components/user-edit-info/user-edit-info.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UserEditInfoComponent,
    UserOrdersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
