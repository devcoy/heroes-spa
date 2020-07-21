import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  providers: [HeroesService]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) { 
    // Recibir parámetros
    this.activatedRoute.params.subscribe(params => {      
      this.heroe = this._heroeService.getHeroe(params['id']);
      //console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
