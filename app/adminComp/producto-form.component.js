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
var ProductosFormComponent = (function () {
    function ProductosFormComponent(productoService, route, location) {
        this.productoService = productoService;
        this.route = route;
        this.location = location;
        this.onSubmit = new core_1.EventEmitter();
    }
    ProductosFormComponent.prototype.ngOnInit = function () {
    };
    ProductosFormComponent.prototype.submit = function () {
        this.onSubmit.emit(this.todo);
        this.todo = "";
    };
    ProductosFormComponent.prototype.save = function () {
        var _this = this;
        this.productoService.update(this.producto)
            .then(function () { return _this.goBack(); });
    };
    ProductosFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductosFormComponent.prototype, "onSubmit", void 0);
    ProductosFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'producto-form',
            templateUrl: '../views/producto-form.html'
        }), 
        __metadata('design:paramtypes', [producto_service_1.ProductoService, router_1.ActivatedRoute, common_1.Location])
    ], ProductosFormComponent);
    return ProductosFormComponent;
}());
exports.ProductosFormComponent = ProductosFormComponent;
//# sourceMappingURL=producto-form.component.js.map