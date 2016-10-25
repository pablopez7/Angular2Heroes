import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  moduleId: module.id,
  selector: 'editar-producto',
  templateUrl: '../views/editar-producto.html'
})
export class EditarProductoComponent implements OnInit {
  producto: Producto;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.productoService.getProducto(id)
        .then(producto => this.producto = producto);
    });
  }

  onSubmit(){
    this.productoService.update(this.producto)
      .then(() => this.goBack());
    console.log(this.producto)
  }

  save(): void {
    this.productoService.update(this.producto)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}