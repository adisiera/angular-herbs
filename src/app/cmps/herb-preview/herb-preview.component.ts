import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Herb } from '../../models/herb';

@Component({
  selector: 'herb-preview',
  templateUrl: './herb-preview.component.html',
  styleUrls: ['./herb-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerbPreviewComponent implements OnInit {
  @Input() herb: Herb
  @Output() onBuyHerb = new EventEmitter<Herb>()
  constructor() { }

  ngOnInit(): void {
  }

}
