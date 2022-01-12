import { Component, OnInit } from '@angular/core';
import { Herb } from '../../models/herb';
import { HerbService } from '../../services/herb.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'herb-edit',
  templateUrl: './herb-edit.component.html',
  styleUrls: ['./herb-edit.component.scss']
})
export class HerbEditComponent implements OnInit {

  constructor(private herbService: HerbService, private router: Router, private route: ActivatedRoute) { }
  herb 
  subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      this.herb = data.herb || this.herbService.getEmptyHerb()
    })
  }

  async onSaveHerb(herbToSave: Herb){
    const herb = await this.herbService.save({...this.herb,...herbToSave}).toPromise()
    this.router.navigate(['herb',herb.id])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
