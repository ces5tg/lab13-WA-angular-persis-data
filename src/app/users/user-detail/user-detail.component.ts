import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',

})
export class UserDetailComponent implements OnInit {

  public user!:User 

  constructor(private route: ActivatedRoute , private serviceUser:UserService) {}
  
  ngOnInit(): void {
    // Obtener el valor del parámetro 'id'
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('Valor del parámetro "id":', parseInt(params['id']));
      this.user = this.serviceUser.detailUser(parseInt(params['id']))!
      // Aquí puedes realizar cualquier lógica adicional con el valor del parámetro
    });
  }
}
