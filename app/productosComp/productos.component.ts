import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Producto }                from '../models/producto';
import { ProductoService }         from '../services/producto.service';

@Component({
  moduleId: module.id,
  selector: 'productos',
  templateUrl: '../views/productos.html',
  styleUrls: [ '../assets/css/dashboard.component.css' ]
})
export class ProductosComponent implements OnInit {
  productos: Producto[];

  constructor(
    private productoService: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.productoService.getProductos()
      .then(productos => this.productos = productos);
  }

  gotoDetail(producto: Producto): void {
    let link = ['/editar-producto', producto.id];
    this.router.navigate(link);
  }
}