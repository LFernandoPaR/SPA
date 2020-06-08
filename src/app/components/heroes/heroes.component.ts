import { Component, OnInit } from '@angular/core';
import listadeheroes from 'src/assets/data/data.json';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HeroeModalComponent } from '../heroe-modal/heroe-modal.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit() {
    this.cargarHeroes();
  }

  private cargarHeroes() {
    this.heroes = listadeheroes;
  }

  mostrarHeroe(heroe: any) {
    const modal = this.ngbModal.open(HeroeModalComponent, {backdrop: 'static', keyboard: false, size: 'lg'});
    modal.componentInstance.heroe = heroe;
    modal.result.then(resp => {

    });

  }
}
