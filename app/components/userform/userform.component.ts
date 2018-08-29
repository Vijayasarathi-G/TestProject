import { User } from './../../user';
import { UsersService } from './../../shared_service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  private user : User;

  constructor(private usersService:UsersService, private router : Router) { }

  ngOnInit() {
    this.user = this.usersService.getter();
  }

  proceedSubmit(){
    if(this.user.id==undefined){
      this.usersService.createUser(this.user).subscribe((user) =>{
        console.log(user);
        this.router.navigate(['/']);
      }),(error) =>{
        console.log(error);
      }
    } else {
      this.usersService.updateUser(this.user).subscribe((user) =>{
        console.log(user);
        this.router.navigate(['/']);
      }),(error) =>{
        console.log(error);
      }
    }
  }
}
