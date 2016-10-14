import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'productos',
  templateUrl: '../views/productos.html',
  styleUrls: ['../assets/css/carousel.css']
})

export class ProductosComponent {

  constructor(
    private router: Router) {}

    gotoCategoria(category): void {
    let link = ['/categoria', category.category];
    this.router.navigate(link);
  }
}