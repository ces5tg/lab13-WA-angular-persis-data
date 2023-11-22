import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
/* ATAJO DE TECLADO -> amodule */

const routes:Routes =[
    {
        path:'list',
        component:PostListComponent
    },
    {
        path:'detail/:id',
        component:PostDetailComponent
    },
    {
        path:'**',
        redirectTo:'list'
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
   
})
export class PostsRoutingModule { }
