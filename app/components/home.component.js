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
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            template: "\n  <!-- Carousel -->\n  <div class=\"container\">\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"3\" class=\"\"></li>\n      </ol>\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n          <img class=\"second-slide\" src=\"./app/assets/imagenes/galeriaHome/productos.jpg\" alt=\"Productos\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1 class=\"txt-col\"><kbd>Nuestros Productos</kbd></h1>\n              <p class=\"txt-col\">Cada producto es elaborado y empacado con la mejor calidad y frescura cada ingrediente es seleccionado cuidadosamente.</p>\n              <p><a class=\"btn btn-lg btn-success\" href=\"/Productos.php\" role=\"button\">Nuestros Productos >></a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"first-slide\" src=\"./app/assets/imagenes/galeriaHome/clientes.jpg\" alt=\"Nuestros Clientes\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1 class=\"txt-col\"><kbd>Nuestros Clientes</kbd></h1>\n              <p class=\"txt-col\">Cada cliente es tan importante para nosotros, por eso cada producto es elaborado con la mas alta calidad.</p>\n              <p><a class=\"btn btn-lg btn-success\" href=\"/NuestrosClientes.php\" role=\"button\">Nuestros Clientes >></a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"third-slide\" src=\"./app/assets/imagenes/galeriaHome/empresaVerde.jpg\" alt=\"Empresa Verde\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1 class=\"txt-col\"><kbd>Empresa Verde</kbd></h1>\n              <p class=\"txt-col\">Somos una empresa Socialmente responsable, y solo procuramos que cada cliente reciba un producto de la mas alta calidad.</p>\n              <p><a class=\"btn btn-lg btn-success\" href=\"/EmpresaVerde.php\" role=\"button\">Empresa Verde >></a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"second-slide\" src=\"./app/assets/imagenes/galeriaHome/img05.jpg\" alt=\"Eminence E.U.A.\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <h1 class=\"txt-col\"><kbd>\u00C9minence E.U.A.</kbd></h1>\n              <p class=\"txt-col\">Puedes ver mas detalles de cada producto en nustra pagina en ingles.<code>www.eminenceorganics.com/us</code></p>\n              <p><a class=\"btn btn-lg btn-success\" href=\"https://eminenceorganics.com/us\" role=\"button\" target=\"_blank\">Eminence E.U.A. >></a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <a class=\"left carousel-control\" href=\"./Inicio.php/#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"./Inicio.php/#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  <!-- /.carousel -->\n  ",
            styleUrls: ['../assets/css/carousel.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map