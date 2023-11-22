import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private serviceUser: UserService) {

  }
  ngOnInit(): void {
    this.users = this.serviceUser.cacheUser.users
  }

  addUser(user: User): void {
    const { name, email } = user
    const newUser: User = {
      id: this.serviceUser.cacheUser.users.length + 1 , name, email
    }
    console.log("entro al ADDUSER")


    this.serviceUser.addUser(newUser)

  }
  deleteUser(id: Number): void {
    this.serviceUser.deleteUser(id)
  }

  /*  users: User[] = []
   addUser(user: User): void {
     console.log({ user });
     this.cacheUser.users.push(user);
     this.saveToLocalStorage();
   }
 
   public cacheUser: cacheUser = {
     users: []
   }
   constructor() {
     this.loadFromLocalStorage(); 
     console.log("esta aqui  , pi pi pi pi")
     this.users = this.cacheUser.users;
   }
   private saveToLocalStorage(): void {
     console.log("entro al save To Local")
     localStorage.setItem('cacheUser', JSON.stringify(this.cacheUser));
   }
 
   private loadFromLocalStorage() {
     console.log("entro al load from")
     if(!localStorage.getItem('cacheUser')) return
     this.cacheUser = JSON.parse(localStorage.getItem('cacheUser')!)
   } */
}
