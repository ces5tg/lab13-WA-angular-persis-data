import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
})
export class PostAddComponent {
  post:Post = {
    id: 0,
    title: '',
    description: '',
    autor: '',
    url: ''
  }

  @Output()
  postAdded =  new EventEmitter<Post>()
  addPost() {
  
    this.postAdded.emit(this.post);
    this.post = {
      id: 0,
    title: '',
    description: '',
    autor: '',
    url: ''
    }// RESETEA LOS VALORES
  }
}
