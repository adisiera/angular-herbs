import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Herb } from '../models/herb';
import { HerbService } from './herb.service';


@Injectable({
  providedIn: 'root'
})
export class HerbResolverService {

  constructor(private herbService: HerbService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Herb> {
    const {id} = route.params
    if (!id) {
      this.router.navigateByUrl('/')
      return null
    }
    return this.herbService.getById(id)
  }
}
