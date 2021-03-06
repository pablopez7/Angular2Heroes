import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

//Servicios
import { HeroService }          from './services/hero.service';
import { ProductoService }          from './services/producto.service';

//Principal
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './components/dashboard.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroSearchComponent }  from './components/hero-search.component';

//Admin
import { LoginComponent }        from './adminComp/login.component';
import { ProductosFormComponent }        from './adminComp/producto-form.component';
import { DetalleProductoComponent }        from './adminComp/detalle-producto.component';
import { ProductosComponent }        from './productosComp/productos.component';
import { EditarProductoComponent }        from './adminComp/editar-producto.component';

//Estructura
import { IndexComponent }        from './estructuraComp/index.component';
import { MenuComponent }        from './estructuraComp/menu.component';
import { HeadboardComponent }        from './estructuraComp/headboard.component';
import { HomeComponent }        from './estructuraComp/home.component';
import { FooterComponent }  from './estructuraComp/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'producto-form',
        component: ProductosFormComponent
      },
      {
        path: 'editar-producto',
        component: EditarProductoComponent
      },
      {
        path: 'editar-producto/:id',
        component: EditarProductoComponent
      },
      {
        path: 'detalle-producto/:id',
        component: DetalleProductoComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    HeadboardComponent,
    HomeComponent,
    FooterComponent,

    LoginComponent,
    ProductosComponent,
    ProductosFormComponent,
    DetalleProductoComponent,
    EditarProductoComponent,

    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService, ProductoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}