import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

import {UserComponent} from './user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';


const USER_CHILD_ROUTES: Routes = [
  {
    path: 'user/:id', component: UserComponent, children: [
      {path: 'user-detail', component: UserDetailsComponent},
      {path: 'user-edit-info', component: UserEditInfoComponent},
      {path: 'user-orders', component: UserOrdersComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(USER_CHILD_ROUTES)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}












