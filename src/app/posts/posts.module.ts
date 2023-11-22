import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostAddComponent } from './post-add/post-add.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PostDetailComponent,
    PostListComponent,
    PostAddComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule, //importamos las rutas hijas de  POSTS
    FormsModule,
  ] , 
  exports:[

  ]
})
export class PostsModule { 
  
}
