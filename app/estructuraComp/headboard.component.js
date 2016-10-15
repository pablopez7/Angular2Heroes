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
var HeadboardComponent = (function () {
    function HeadboardComponent() {
    }
    HeadboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'headboard',
            template: "\n      <div class=\"container marketing\">\n        <div class=\"row featurette\">\n          <div class=\"col-md-7 col-md-push-5\">\n            <h2 class=\"featurette-heading text-center\">\u00C9minence <span class=\"text-muted\">M\u00E9xico.</span></h2>\n          </div>\n          <div class=\"col-md-5 col-md-pull-7\">\n            <img class=\"featurette-image img-responsive center-block\" src=\"./app/assets/imagenes/logo/LogoEminence.png\" width=\"300em\" alt=\"Generic placeholder image\">\n          </div>\n        </div>\n        <br>\n      </div>\n  ",
            styleUrls: ['../assets/css/carousel.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HeadboardComponent);
    return HeadboardComponent;
}());
exports.HeadboardComponent = HeadboardComponent;
//# sourceMappingURL=headboard.component.js.map