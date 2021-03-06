import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: [ '../assets/css/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}