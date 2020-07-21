import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor(
    private _router: Router
  ) { 
    this.heroeSelected = new EventEmitter(); // Inicializo el EventEmiter
  }

  ngOnInit(): void {
  }

  getHeroe() {
    //console.log(this.index);
    this._router.navigate(['/heroe', this.index]);
    //this.heroeSelected.emit(this.index); // Emito el evento
  }

}
