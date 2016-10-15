import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Producto }                from '../models/producto';
import { ProductoService }         from '../services/producto.service';

@Component({
  moduleId: module.id,
  selector: 'producto-form',
  templateUrl: '../views/producto-form.html'
})
export class ProductosFormComponent implements OnInit {
  productos: Producto[];
  selectedProducto: Producto;

  constructor(
    private productoService: ProductoService,
    private router: Router) { }

  getProductos(): void {
    this.productoService
        .getProductos()
        .then(productos => this.productos = productos);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.productoService.create(nombre)
      .then(producto => {
        this.productos.push(producto);
        this.selectedProducto = null;
      });
  }

  delete(producto: Producto): void {
    this.productoService
        .delete(producto.id)
        .then(() => {
          this.productos = this.productos.filter(p => p !== producto);
          if (this.selectedProducto === producto) { this.selectedProducto = null; }
        });
  }

  ngOnInit(): void {
    this.getProductos();
  }

  onSelect(producto: Producto): void {
    this.selectedProducto = producto;
  }

  gotoDetail(): void {
    this.router.navigate(['/detalle-producto', this.selectedProducto.id]);
  }
}