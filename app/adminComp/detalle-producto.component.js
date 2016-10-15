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
var common_1 = require('@angular/common');
var producto_service_1 = require('../services/producto.service');
var DetalleProductoComponent = (function () {
    function DetalleProductoComponent(productoService, route, location) {
        this.productoService = productoService;
        this.route = route;
        this.location = location;
    }
    DetalleProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.productoService.getProducto(id)
                .then(function (producto) { return _this.producto = producto; });
        });
    };
    DetalleProductoComponent.prototype.save = function () {
        var _this = this;
        this.productoService.update(this.producto)
            .then(function () { return _this.goBack(); });
    };
    DetalleProductoComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetalleProductoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detalle-producto',
            templateUrl: '../views/detalle-producto.html'
        }), 
        __metadata('design:paramtypes', [producto_service_1.ProductoService, router_1.ActivatedRoute, common_1.Location])
    ], DetalleProductoComponent);
    return DetalleProductoComponent;
}());
exports.DetalleProductoComponent = DetalleProductoComponent;
//# sourceMappingURL=detalle-producto.component.js.map