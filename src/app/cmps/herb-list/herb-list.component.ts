import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Herb } from '../../models/herb';

@Component({
  selector: 'herb-list',
  templateUrl: './herb-list.component.html',
  styleUrls: ['./herb-list.component.scss']
})
export class HerbListComponent implements OnInit {


  @Input() herbs: Herb[] = []
  @Output() onSelectHerb = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    console.log('herbs:', this.herbs);

  }

}
