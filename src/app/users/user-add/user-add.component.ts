import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',

})
export class UserAddComponent {
  user:User = {
    id: 0,
    name: "",
    email: ""
  }
  @Output()
  userAdded =  new EventEmitter<User>()
  addUser() {
  
    this.userAdded.emit(this.user);
    this.user = {
      id: 0,
      name: "",
      email: ""
    }// RESETEA LOS VALORES
  }
}
