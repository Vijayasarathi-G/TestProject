import { User } from './../../user';
import { UsersService } from './../../shared_service/users.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private users : User[];

  constructor(private usersService:UsersService, private router : Router) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) =>{
      console.log(users);
      this.users=users;
    }),(error)=>{
      console.log(error);
    }
  }

  deleteUser(user){
    this.usersService.deleteUser(user.id).subscribe((data) =>{
      console.log("delete user"+user.id);
      this.users.splice(this.users.indexOf(user),1);
    }),(error)=>{
      console.log(error);
    }
  }

  updateUser(user){
    this.usersService.setter(user);
    this.router.navigate(['/op']);
  }

  newUser(){
    let user = new User();
    this.usersService.setter(user);
    this.router.navigate(['/op']);
  }

}
