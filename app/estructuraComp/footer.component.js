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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'footer',
            template: "\n  <div class=\"container text-center  color1\">\n        <div class=\"col-sm-1 col-md-1\">\n            <br><br>\n            <login></login>\n        </div>\n        <div class=\"col-sm-5 col-md-7\">\n            <address>\n                <h4><strong>Claudia Mendez Cuervo</strong></h4>\n                <h5><mark><u>Mexico Managing Director</u></mark></h5>\n                <abbr title=\"Phone\">P:</abbr> (55) 3722 6299 <br>\n                <a href=\"mailto:claudia@eminence.mx\">claudia@eminence.mx</a>\n            </address>\n        </div>\n        <div class=\"col-sm-6 col-md-4\">\n            <h4>Siguenos en:</h4>\n            <br>\n            <a href=\"https://www.facebook.com/MexicoEminence\" target=\"_blank\">\n                <img style=\"width:35px\" alt=\"Facebook\" src=\"./app/assets/imagenes/logo/fb.png\">\n            </a>\n\n            <a href=\"https://www.facebook.com/MexicoEminence\" target=\"_blank\">\n                <img style=\"width:35px\" alt=\"Twitter\" src=\"./app/assets/imagenes/logo/twitter.png\">\n            </a>\n\n            <a href=\"https://www.facebook.com/MexicoEminence\" target=\"_blank\">\n                <img style=\"width:35px\" alt=\"Instagram\" src=\"./app/assets/imagenes/logo/instagram.png\">\n            </a>\n        </div>\n    </div>\n  ",
            styleUrls: ['../assets/css/carousel.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map