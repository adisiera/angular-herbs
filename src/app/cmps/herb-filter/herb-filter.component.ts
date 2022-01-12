import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FilterBy } from '../../models/filter-by';

@Component({
  selector: 'herb-filter',
  templateUrl: './herb-filter.component.html',
  styleUrls: ['./herb-filter.component.scss']
})
export class HerbFilterComponent implements OnInit {

  @Input() filterBy$: Observable<FilterBy>
  @Output() onSetFilter = new EventEmitter<FilterBy>()

  constructor() { }

  filterBy: FilterBy
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
