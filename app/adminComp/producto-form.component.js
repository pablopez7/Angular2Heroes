"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var producto_service_1 = require('../services/producto.service');
var ProductosFormComponent = (function () {
    function ProductosFormComponent(productoService, router) {
        this.productoService = productoService;
        this.router = router;
    }
    ProductosFormComponent.prototype.getProductos = function () {
        var _this = this;
        this.productoService
            .getProductos()
            .then(function (productos) { return _this.productos = productos; });
    };
    ProductosFormComponent.prototype.add = function (nombre) {
        var _this = this;
        nombre = nombre.trim();
        if (!nombre) {
            return;
        }
        this.productoService.create(nombre)
            .then(function (producto) {
            _this.productos.push(producto);
            _this.selectedProducto = null;
        });
    };
    ProductosFormComponent.prototype.delete = function (producto) {
        var _this = this;
        this.productoService
            .delete(producto.id)
            .then(function () {
            _this.productos = _this.productos.filter(function (p) { return p !== producto; });
            if (_this.selectedProducto === producto) {
                _this.selectedProducto = null;
            }
        });
    };
    ProductosFormComponent.prototype.ngOnInit = function () {
        this.getProductos();
    };
    ProductosFormComponent.prototype.onSelect = function (producto) {
        this.selectedProducto = producto;
    };
    ProductosFormComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detalle-producto', this.selectedProducto.id]);
    };
    ProductosFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'producto-form',
            templateUrl: '../views/producto-form.html'
        }), 
        __metadata('design:paramtypes', [producto_service_1.ProductoService, router_1.Router])
    ], ProductosFormComponent);
    return ProductosFormComponent;
}());
exports.ProductosFormComponent = ProductosFormComponent;
//# sourceMappingURL=producto-form.component.js.map