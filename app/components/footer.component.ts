import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footer',
  template: `
  <div class="container text-center  color1">
        <div class="col-sm-6 col-md-8">
            <address>
                <h4><strong>Claudia Mendez Cuervo</strong></h4>
                <h5><mark><u>Mexico Managing Director</u></mark></h5>
                <abbr title="Phone">P:</abbr> (55) 3722 6299 <br>
                <a href="mailto:claudia@eminence.mx">claudia@eminence.mx</a>
            </address>
        </div>
        <div class="col-sm-6 col-md-4">
            <h4>Siguenos en:</h4>
            <br>
            <a href="https://www.facebook.com/MexicoEminence" target="_blank">
                <img style="width:35px" alt="Facebook" src="./app/assets/imagenes/logo/fb.png">
            </a>

            <a href="https://www.facebook.com/MexicoEminence" target="_blank">
                <img style="width:35px" alt="Twitter" src="./app/assets/imagenes/logo/twitter.png">
            </a>

            <a href="https://www.facebook.com/MexicoEminence" target="_blank">
                <img style="width:35px" alt="Instagram" src="./app/assets/imagenes/logo/instagram.png">
            </a>
        </div>
    </div>
  `,
  styleUrls: ['../assets/css/carousel.css']
})
export class FooterComponent {}