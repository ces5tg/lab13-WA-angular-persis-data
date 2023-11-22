import { Injectable } from '@angular/core';
import { cacheUser } from './cacheUser';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

    public cacheUser: cacheUser = {
        users: []
    }
    constructor() {
        this.loadFromLocalStorage();// argamos la informacion
        console.log("esta aqui  , pi pi pi pi")
  
    }
    private saveToLocalStorage(): void {
        console.log("entro al save To Local")
        localStorage.setItem('cacheUser', JSON.stringify(this.cacheUser));
    }

    private loadFromLocalStorage() {
        console.log("entro al load from")
        if(!localStorage.getItem('cacheUser')) return
        this.cacheUser = JSON.parse(localStorage.getItem('cacheUser')!)
      }
    
    addUser(user:User):void{
        console.log({user})
        this.cacheUser.users.push(user)
        this.saveToLocalStorage()
        console.log({user: this.cacheUser.users})
    }
    detailUser(id:number):User | undefined {
        return this.cacheUser.users!.find(user => user.id === id);         
    }
    deleteUser(id: Number): void {
  
        const index = this.cacheUser.users.findIndex(user => user.id === id);

        if (index !== -1) {

          this.cacheUser.users.splice(index, 1);
    
          this.saveToLocalStorage();
        } else {
          console.log(`Usuario con ID ${id} no encontrado.`);
        }
      }
      

}