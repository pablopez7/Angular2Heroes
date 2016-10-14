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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var hero_service_1 = require('./services/hero.service');
var app_component_1 = require('./app.component');
var login_component_1 = require('./components/login.component');
var index_component_1 = require('./components/index.component');
var menu_component_1 = require('./components/menu.component');
var headboard_component_1 = require('./components/headboard.component');
var home_component_1 = require('./components/home.component');
var footer_component_1 = require('./components/footer.component');
var productos_component_1 = require('./components/productos.component');
var categoria_component_1 = require('./components/categoria.component');
var dashboard_component_1 = require('./components/dashboard.component');
var heroes_component_1 = require('./components/heroes.component');
var hero_detail_component_1 = require('./components/hero-detail.component');
var hero_search_component_1 = require('./components/hero-search.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        component: index_component_1.IndexComponent
                    },
                    {
                        path: 'productos',
                        component: productos_component_1.ProductosComponent
                    },
                    {
                        path: 'categoria',
                        component: categoria_component_1.CategoriaComponent
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'detail/:id',
                        component: hero_detail_component_1.HeroDetailComponent
                    },
                    {
                        path: 'heroes',
                        component: heroes_component_1.HeroesComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                index_component_1.IndexComponent,
                menu_component_1.MenuComponent,
                headboard_component_1.HeadboardComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                productos_component_1.ProductosComponent,
                categoria_component_1.CategoriaComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map