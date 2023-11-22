import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  
  {
    path:'users',
    loadChildren:() => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path:'posts',
    loadChildren:() => import('./posts/posts.module').then(m => m.PostsModule) // se importa el MODULO
  } , 
  {
    path:'default',
    component:DefaultComponent

  },
  {
    path:'**',
    redirectTo:'default'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
