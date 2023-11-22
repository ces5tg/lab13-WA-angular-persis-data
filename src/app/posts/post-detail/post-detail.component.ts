import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent   implements OnInit {
  public post!:Post 

  constructor(private route: ActivatedRoute , private servicePost:PostService) {}
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('Valor del parámetro "id":', parseInt(params['id']));
      this.post = this.servicePost.detailPost(parseInt(params['id']))!

    });
  }

}
