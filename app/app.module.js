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
//Servicios
var hero_service_1 = require('./services/hero.service');
var producto_service_1 = require('./services/producto.service');
//Principal
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./components/dashboard.component');
var heroes_component_1 = require('./components/heroes.component');
var hero_detail_component_1 = require('./components/hero-detail.component');
var hero_search_component_1 = require('./components/hero-search.component');
//Admin
var login_component_1 = require('./adminComp/login.component');
var producto_form_component_1 = require('./adminComp/producto-form.component');
var detalle_producto_component_1 = require('./adminComp/detalle-producto.component');
var productos_component_1 = require('./productosComp/productos.component');
var editar_producto_component_1 = require('./adminComp/editar-producto.component');
//Estructura
var index_component_1 = require('./estructuraComp/index.component');
var menu_component_1 = require('./estructuraComp/menu.component');
var headboard_component_1 = require('./estructuraComp/headboard.component');
var home_component_1 = require('./estructuraComp/home.component');
var footer_component_1 = require('./estructuraComp/footer.component');
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
                        path: 'index',
                        component: index_component_1.IndexComponent
                    },
                    {
                        path: 'productos',
                        component: productos_component_1.ProductosComponent
                    },
                    {
                        path: 'producto-form',
                        component: producto_form_component_1.ProductosFormComponent
                    },
                    {
                        path: 'editar-producto',
                        component: editar_producto_component_1.EditarProductoComponent
                    },
                    {
                        path: 'editar-producto/:id',
                        component: editar_producto_component_1.EditarProductoComponent
                    },
                    {
                        path: 'detalle-producto/:id',
                        component: detalle_producto_component_1.DetalleProductoComponent
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
                    },
                    {
                        path: '',
                        component: index_component_1.IndexComponent
                    },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                index_component_1.IndexComponent,
                menu_component_1.MenuComponent,
                headboard_component_1.HeadboardComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                productos_component_1.ProductosComponent,
                producto_form_component_1.ProductosFormComponent,
                detalle_producto_component_1.DetalleProductoComponent,
                editar_producto_component_1.EditarProductoComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService, producto_service_1.ProductoService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map