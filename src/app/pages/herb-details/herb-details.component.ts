import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Herb } from '../../models/herb';
import { HerbService } from '../../services/herb.service';
import { mergeMap } from 'rxjs/operators'

@Component({
  selector: 'herb-details',
  templateUrl: './herb-details.component.html',
  styleUrls: ['./herb-details.component.scss']
})
export class HerbDetailsComponent implements OnInit {

  // @Input() herbId: string;
  // @Output() onSwitchHerb = new EventEmitter<string>()
  herb: Herb
  constructor(private herbService: HerbService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
   this.route.data.subscribe(data => {
     this.herb = data.herb
   })
  }

  onBack() {
    this.router.navigateByUrl('/herb')
  }

  onToggleEdit(){
    this.router.navigate(['herb/edit',this.herb.id])
  }

  async onRemoveHerb(){
    await this.herbService.remove(this.herb.id)
    this.onBack()
   
  }

}
