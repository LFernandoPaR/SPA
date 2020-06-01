import { Component, OnInit } from '@angular/core';
import listadeheroes from 'src/assets/data/data.json';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarHeroes();
  }

  private cargarHeroes() {
    this.heroes = listadeheroes;
  }
}
