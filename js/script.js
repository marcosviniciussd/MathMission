var futuro = new Date(2016, 5, 30, 23, 60);
//actualiza el contador cada 4 segundos ( = 4000 milisegundos)
var actualiza = 1000;
// función que calcula y escribe el tiempo en días, horas, minutos y segundos
// que faltan para la variable futuro
function faltan() {
    var ahora = new Date();
    var faltan = futuro - ahora;
    // si todavís no es futuro
    if (faltan > 0) {
        var segundos = Math.round(faltan / 1000);
        var minutos = Math.floor(segundos / 60);
        var segundos_s = segundos % 60;
        var horas = Math.floor(minutos / 60);
        var minutos_s = minutos % 60;
        var dias = Math.floor(horas / 24);
        var horas_s = horas % 24;
        // escribe los resultados
        (segundos_s < 10) ? segundos_s = "0" + segundos_s : segundos_s = segundos_s;
        (minutos_s < 10) ? minutos_s = "0" + minutos_s : minutos_s = minutos_s;
        (horas_s < 10) ? horas_s = "0" + horas_s : horas_s = horas_s;
        (dias < 10) ? dias = "0" + dias : dias = dias;

		document.getElementById("segundos").innerHTML = segundos_s;
		document.getElementById("minutos").innerHTML = minutos_s;
		document.getElementById("horas").innerHTML = horas_s;
		document.getElementById("dias").innerHTML = dias;

        //var resultado = dias + " dias : " + horas_s + " horas : " + minutos_s + " minutos : " + segundos_s + " segundos";
        //document.formulario.reloj.value = resultado;
        //actualiza el contador
        setTimeout("faltan()", actualiza);
    }
    // estamos en el futuro
    else {
        document.formulario.reloj.value = "00 dias : 00 horas : 00 minutos : 00 segundos";
    }
}
faltan();

function mudaNavbar(){ //
   var navbarTop = $('.navbar').offset().top; // retorna a posicao
   console.log("navbarTop");
   console.log(navbarTop);

   $(window).scroll(function(){ // evento scroll
      var windowTop = $(window).scrollTop();

      if (navbarTop < windowTop) {
          $('.navbar').addClass("navbar-custom"); //adiciona a classe

      } else {
          $('.navbar').removeClass("navbar-custom"); //remove a classe

      }
  });
}
mudaNavbar();

/*$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});*/
function addClass(el) {
    menu.removeClass('active');
    $(el).addClass('active');
};

var menu = $('#meuMenu .nav li');
var sectionPositions = $('section').map(function(){
    return $(this).position().top;
});
var sections = $('section');
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    var currentElement;
    $(sectionPositions).each(function (i) {
        if (scroll > this - 50) currentElement = menu[i];
    });
    currentElement && addClass(currentElement);
});
menu.on('click', function () {
    addClass(this);
});

$('.carousel').carousel({
  interval: 3000
});
