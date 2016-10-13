import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  template: `
  <!-- Carousel -->
  <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1" class=""></li>
        <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        <li data-target="#myCarousel" data-slide-to="3" class=""></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="second-slide" src="./app/assets/imagenes/galeriaHome/productos.jpg" alt="Productos">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="txt-col"><kbd>Nuestros Productos</kbd></h1>
              <p class="txt-col">Cada producto es elaborado y empacado con la mejor calidad y frescura cada ingrediente es seleccionado cuidadosamente.</p>
              <p><a class="btn btn-lg btn-success" href="/Productos.php" role="button">Nuestros Productos >></a></p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="first-slide" src="./app/assets/imagenes/galeriaHome/clientes.jpg" alt="Nuestros Clientes">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="txt-col"><kbd>Nuestros Clientes</kbd></h1>
              <p class="txt-col">Cada cliente es tan importante para nosotros, por eso cada producto es elaborado con la mas alta calidad.</p>
              <p><a class="btn btn-lg btn-success" href="/NuestrosClientes.php" role="button">Nuestros Clientes >></a></p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="third-slide" src="./app/assets/imagenes/galeriaHome/empresaVerde.jpg" alt="Empresa Verde">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="txt-col"><kbd>Empresa Verde</kbd></h1>
              <p class="txt-col">Somos una empresa Socialmente responsable, y solo procuramos que cada cliente reciba un producto de la mas alta calidad.</p>
              <p><a class="btn btn-lg btn-success" href="/EmpresaVerde.php" role="button">Empresa Verde >></a></p>
            </div>
          </div>
        </div>
        <div class="item">
          <img class="second-slide" src="./app/assets/imagenes/galeriaHome/img05.jpg" alt="Eminence E.U.A.">
          <div class="container">
            <div class="carousel-caption">
              <h1 class="txt-col"><kbd>Éminence E.U.A.</kbd></h1>
              <p class="txt-col">Puedes ver mas detalles de cada producto en nustra pagina en ingles.<code>www.eminenceorganics.com/us</code></p>
              <p><a class="btn btn-lg btn-success" href="https://eminenceorganics.com/us" role="button" target="_blank">Eminence E.U.A. >></a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="./Inicio.php/#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="./Inicio.php/#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- /.carousel -->
  `,
  styleUrls: ['../assets/css/carousel.css']
})

export class HomeComponent {}