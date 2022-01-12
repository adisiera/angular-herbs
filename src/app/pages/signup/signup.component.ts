import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService ,private router: Router) { }
  username: string = ''
  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.login()
    this.router.navigateByUrl('/')
  }

}
