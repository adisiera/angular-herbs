import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HerbService } from '../../services/herb.service';
import { Herb } from '../../models/herb';
import { FilterBy } from '../../models/filter-by';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'herb-app',
  templateUrl: './herb-app.component.html',
  styleUrls: ['./herb-app.component.scss']
})
export class HerbAppComponent implements OnInit {

  constructor(private herbService: HerbService, private userService: UserService) { }

  filterBy$: Observable<FilterBy>
  herbs$: Observable<Herb[]>

  ngOnInit(): void {
    this.herbs$ = this.herbService.herbs$
    this.filterBy$ = this.herbService.filterBy$
    this.herbService.query()

  }

  onBuyHerb(herb){
    this.userService.addToCart(herb)
  }

  onSetFilter(filterBy: FilterBy) {
    this.herbService.setFilter(filterBy)
  }

}
