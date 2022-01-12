import { Injectable } from '@angular/core';
import { Herb } from '../models/herb';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user = { id: 'u101', name: 'Shraga', cart: [] }
  private _loggedInUser$ = new BehaviorSubject(this._user)
  public loggedInUser$ = this._loggedInUser$.asObservable()
  // user: User = null
  constructor() { }

  addToCart(herb: Herb) {
    const user = this._loggedInUser$.getValue()
    user.cart.push(herb)
    this._loggedInUser$.next(user)
  }

  login(){
    this._loggedInUser$.next(this._user)
  }

  logout(){
    this._loggedInUser$.next(null)
  }

  // signup(name) {
  //   const user = new User()
  //   user.name = name
  //   user.setId()
  //   this.user = user
  //   this._saveUser()
  // }

  // public getEmptyUser() {
  //   return {
  //     _id: '',
  //     name: '',
  //     coins: 100,
  //     moves: []
  //   }
  // }

}
