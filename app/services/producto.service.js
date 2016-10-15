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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ProductoService = (function () {
    function ProductoService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.productosUrl = 'http://localhost:3030/catalogo'; // URL to web api
        this.productUrl = 'http://localhost:3030/fileProducto'; // URL to web api
    }
    ProductoService.prototype.getProductos = function () {
        return this.http.get(this.productosUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductoService.prototype.getProducto = function (id) {
        return this.getProductos()
            .then(function (productos) { return productos.find(function (producto) { return producto.id === id; }); });
    };
    ProductoService.prototype.create = function (nombre) {
        return this.http
            .post(this.productUrl, JSON.stringify({ nombre: nombre }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProductoService.prototype.update = function (producto) {
        var url = this.productUrl + "/" + producto.id;
        return this.http
            .put(url, JSON.stringify(producto), { headers: this.headers })
            .toPromise()
            .then(function () { return producto; })
            .catch(this.handleError);
    };
    ProductoService.prototype.delete = function (id) {
        var url = this.productUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ProductoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductoService);
    return ProductoService;
}());
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map