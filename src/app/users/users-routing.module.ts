import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes: Routes = [
    {
        path:'list',
        component:UserListComponent
    },
    {
        path:'detail/:id',
        component:UserDetailComponent
    },
    {
        path:'**',
        redirectTo:'list'
    }
   
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],

})
export class UsersRoutingModule { }