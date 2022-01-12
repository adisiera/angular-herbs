import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  loggedInUser$

  ngOnInit(): void {
    this.loggedInUser$ = this.userService.loggedInUser$
  }

  onLogout(){
    this.userService.logout()
  }

  onLogin(){
    this.userService.login()
  }

  
 

}
