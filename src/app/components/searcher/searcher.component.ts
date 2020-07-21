import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {
  heroes: any[];
  searchString: string;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    // Recibir parámetros
    this._activateRoute.params.subscribe(params => {
      this.searchString = params['searchString']
      this.heroes = this._heroesService.searchHeroes(this.searchString);
      //console.log(this.heroes);
    });
  }

}
