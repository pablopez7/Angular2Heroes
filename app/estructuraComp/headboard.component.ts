import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'headboard',
  template: `
      <div class="container marketing">
        <div class="row featurette">
          <div class="col-md-7 col-md-push-5">
            <h2 class="featurette-heading text-center">Éminence <span class="text-muted">México.</span></h2>
          </div>
          <div class="col-md-5 col-md-pull-7">
            <img class="featurette-image img-responsive center-block" src="./app/assets/imagenes/logo/LogoEminence.png" width="300em" alt="Generic placeholder image">
          </div>
        </div>
        <br>
      </div>
  `,
  styleUrls: ['../assets/css/carousel.css']
})
export class HeadboardComponent {}