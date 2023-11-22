import { Injectable } from '@angular/core';
import { cachePost } from './cachePost';
import { Post } from './post';

@Injectable({providedIn: 'root'})
export class PostService {
    
    public cachePost:cachePost={
        post: []
    }
    constructor() { 
        this.loadFormLocalStorage()
    }

    private saveToLocalStorage():void{
        localStorage.setItem('cachePost' , JSON.stringify(this.cachePost))

    }
    private loadFormLocalStorage(){
        if(!localStorage.getItem('cachePost')) return 
        this.cachePost = JSON.parse(localStorage.getItem('cachePost')!)//siempre establecer como un valor fijo

    }
    addPost(post:Post):void{
        console.log("entro al add post")
        this.cachePost.post.push(post)
        this.saveToLocalStorage()

    }
    detailPost(id:number):Post | undefined {
        return this.cachePost.post!.find(post => post.id === id);         
    }
    deletePost(id: Number): void {
  
        const index = this.cachePost.post.findIndex(post => post.id === id);

        if (index !== -1) {

          this.cachePost.post.splice(index, 1);
    
          this.saveToLocalStorage();
        } else {
          console.log(`post con ID ${id} no encontrado.`);
        }
      }


    
}