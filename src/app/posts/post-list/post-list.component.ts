import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit  {
  posts:Post[] = []
  constructor(private servicePost: PostService) {

  }
  ngOnInit(): void {
    this.posts  = this.servicePost.cachePost.post
  }
  addPost(post: Post): void {
    const { title , description , autor , url } = post
    const newUser: Post = {
      id: this.servicePost.cachePost.post.length + 1 , title , description , autor , url
    }
    console.log("entro al ADDUSER")


    this.servicePost.addPost(newUser)

  }
  deletePost(id: Number): void {
    this.servicePost.deletePost(id)
  }

}
