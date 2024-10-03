$(function() {  

  $(".cabecera-sitio .btn-movil").click(function(e){
       e.preventDefault();
       $(".cabecera-sitio .menu").toggleClass('active');
     });
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          event.preventDefault();
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              function () {
                $( "#check" ).prop( "checked", false );
              }
            );
          }
        }
      });	

      $('.slider-banner').slick({
        dots: true,
        slidesToShow: 1,
        arrows:false,
        appendDots:'.banner-home .dots',
      });
      $('.slider-galeria').slick({
        dots: true,
        slidesToShow: 1,
        arrows:false,
        // appendDots:'.dots',
      });
      $('.slider-novedades').slick({
        dots: true,
        slidesToShow: 3,
        arrows:false,
        appendDots:'.novedades .dots',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
      $('.slider-clientes').slick({
        dots: true,
        slidesToShow: 5,
        arrows:false,
        appendDots:'.clientes .dots',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
      $('.slider-asociaciones').slick({
        dots: true,
        slidesToShow: 5,
        arrows:false,
        appendDots:'.asociaciones .dots',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });

      $(".tiempo").click(function(e) {
        e.preventDefault();
        $(".tiempo").removeClass('active'); // Remueve la clase de todos los enlaces
        $(this).addClass('active'); // Añade la clase al enlace clicado
    });
      function igualarAltura(clase) {
               var alturas = 0;

               // Recorre todos los elementos con la clase proporcionada
               $('.' + clase).each(function() {
                   // Restablece la altura para que se pueda calcular correctamente
                   $(this).css('height', 'auto');
                   // Compara y almacena la altura máxima
                   alturas = Math.max(alturas, $(this).height());
               });

               // Establece la altura máxima en todos los elementos
               $('.' + clase).height(alturas);
           }

           // Llama a la función al cargar la página y en el evento de cambio de tamaño de la ventana
           $(document).ready(function() {
               // Llama a la función con la clase 'elemento'
               setTimeout(function() {
              igualarAltura('cuadro-indicador');
              igualarAltura('titulo-novedad');
              igualarAltura('contenedor-cuadro-servicio');
              igualarAltura('contenedor-categoria');


            }, 100);

               // Vuelve a llamar a la función cuando cambia el tamaño de la ventana
               $(window).resize(function() {
                   igualarAltura('cuadro-indicador');
                   igualarAltura('titulo-novedad');
                   igualarAltura('contenedor-cuadro-servicio');
                   igualarAltura('contenedor-categoria');
               });
           });


  }
);
function toggleSearch() {
  const searchWrapper = document.querySelector('.search-input-wrapper');
  searchWrapper.style.display = searchWrapper.style.display === 'block' ? 'none' : 'block';
}