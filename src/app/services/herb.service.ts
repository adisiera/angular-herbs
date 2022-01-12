import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { storageService } from './async-storage.service';
import { Herb } from '../models/herb';
import { FilterBy } from '../models/filter-by';
import {HttpClientModule } from '@angular/common/http';


const ENTITY = 'herb'
@Injectable({
  providedIn: 'root'
})
export class HerbService {

  constructor(private http: HttpClientModule) {
    const herbs = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    if (!herbs || !herbs.length) {
      localStorage.setItem(ENTITY, JSON.stringify(this.herbsDB))
    }
  }

  private initialFilter = {
    term: '',
    minPrice: null,
    maxPrice: null
  }

  private _herbs$: BehaviorSubject<Herb[]> = new BehaviorSubject(null)
  public herbs$: Observable<Herb[]> = this._herbs$.asObservable()

  private _filterBy$: BehaviorSubject<FilterBy> = new BehaviorSubject(this.initialFilter)
  public filterBy$: Observable<FilterBy> = this._filterBy$.asObservable()

  public async query() {
    const filterBy = this._filterBy$.getValue()
    const herbs = (await storageService.query(ENTITY)) as Herb[]
    const filteredHerbs = this._filterHerbs(herbs, filterBy).map(herb => ({ ...herb, in_vicinity: Math.random() > 0.5 }))
    this._herbs$.next(filteredHerbs)
  }

  public getById(herbId: string): Observable<Herb> {
    return from(storageService.get(ENTITY, herbId) as Promise<Herb>)
  }

  public setFilter(filterBy) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  public async remove(herbId: string) {
    try {
      await storageService.remove(ENTITY, herbId)
      const herbs = this._herbs$.getValue()
      if (!herbs) throw Error('no herbs in data')
      const herbIdx = herbs.findIndex(herb => herb.id === herbId)
      if (herbIdx === -1) throw Error('Herb not found!')
      herbs.splice(herbIdx, 1)
      this._herbs$.next(herbs)
    } catch (err) {
      console.log('could not remove herb', herbId, err);
    }
  }

  public save(herb) {
    const method = herb.id ? 'put' : 'post'
    const prmSavedHerb = storageService[method](ENTITY, herb)
    return from(prmSavedHerb) as Observable<Herb>
  }

  public getEmptyHerb(): Herb {
    return {
      id: '',
      common_name: '',
      scientific_name: '',
      image_url: '',
      price: null,
      in_vicinity: false
    }
  }

  private _filterHerbs(herbs: Herb[], filterBy: FilterBy) {
    return herbs.filter(herb => {
      const termRegex = new RegExp(filterBy.term, 'ig')
      const minPrice = filterBy.minPrice || 0
      const maxPrice = filterBy.maxPrice || Number.MAX_SAFE_INTEGER
      const isStringMatched = termRegex.test(herb.common_name) || termRegex.test(herb.scientific_name)

      return isStringMatched && herb.price > minPrice && herb.price < maxPrice
    })
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  // private getHerbPic(){
  //   let img = ''
  //   let data = []
  //   return this.http.get<{values}>(`https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=SYbZheoWHUUUSd2t6yMN-sHj4jSM4wtIpvLszgo0VTI`).pipe(map(
  //     res => {

  //     }
  //   ))
  // }
  

  private herbsDB = [
    {
      id: this._makeId(),
      common_name: "Rice",
      scientific_name: "Oryza sativa",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002277/plants/rice_drzkla.jpg",
      in_vicinity: true,
      price: 100
    },
    {
      id: this._makeId(),
      common_name: "Kidney bean",
      scientific_name: "Phaseolus vulgaris",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002272/plants/kidney-bean_y5daym.jpg",
      in_vicinity: true,
      price: 66
    },
    {
      id: this._makeId(),
      common_name: "Soybean",
      scientific_name: "Glycine max",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002272/plants/soybean_wvvvjq.jpg",
      in_vicinity: false,
      price: 123
    },
    {
      id: this._makeId(),
      common_name: "Paradise apple",
      scientific_name: "Malus pumila",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002275/plants/paradise-apple_jvs2sy.jpg",
      in_vicinity: true,
      price: 78
    },
    {
      id: this._makeId(),
      common_name: "Cabbage thistle",
      scientific_name: "Cirsium oleraceum",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002273/plants/cabbage-thistle_fkvyrf.jpg",
      in_vicinity: true,
      price: 92
    },
    {
      id: this._makeId(),
      common_name: "Cassava",
      scientific_name: "Manihot esculenta",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002281/plants/cassava_pwtgsi.jpg",
      in_vicinity: false,
      price: 5
    },
    {
      id: this._makeId(),
      common_name: "Irish potato",
      scientific_name: "Solanum tuberosum",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002272/plants/irish-potato_pxyxqe.jpg",
      in_vicinity: true,
      price: 11
    },
    {
      id: this._makeId(),
      common_name: "Greater burdock",
      scientific_name: "Arctium lappa",
      image_url: "https://res.cloudinary.com/drak3llqt/image/upload/v1614002271/plants/burdock_ytw0aq.jpg",
      in_vicinity: false,
      price: 34
    },
  ]
}
