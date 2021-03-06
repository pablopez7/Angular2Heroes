import { Component, OnInit, Output, EventEmitter }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  moduleId: module.id,
  selector: 'producto-form',
  templateUrl: '../views/producto-form.html'
})
export class ProductosFormComponent implements OnInit {
  producto: Producto;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }
  
  @Output() onSubmit = new EventEmitter<any>()
  todo: string

  public submit(){
    this.onSubmit.emit(this.todo)
    this.todo = "";
  }

  save(): void {
    this.productoService.update(this.producto)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}