import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';


import { HeroService }          from './services/hero.service';

import { AppComponent }         from './app.component';
import { LoginComponent }        from './components/login.component';
import { IndexComponent }        from './components/index.component';
import { MenuComponent }        from './components/menu.component';
import { HeadboardComponent }        from './components/headboard.component';
import { HomeComponent }        from './components/home.component';
import { FooterComponent }  from './components/footer.component';

import { DashboardComponent }   from './components/dashboard.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { HeroSearchComponent }  from './components/hero-search.component';

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
    LoginComponent,
    IndexComponent,
    MenuComponent,
    HeadboardComponent,
    HomeComponent,
    FooterComponent,

    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}