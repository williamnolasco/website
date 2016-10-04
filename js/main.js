	var $menu = $('.mobile-menu nav')
	var $acercaLink = $('.link-about')
	var $acontecimientosLink = $('.link-events')
	var $proyectosLink = $('.link-projects')
	var $serviciosLink = $('.link-services')
	var $contactoLink = $('.link-contact')
	var $acerca = $('.brief-description-of-my')
	var $acontecimientos = $('.events-2013')
	var $proyectos = $('.hoja4')
	var $servicios = $('.hoja5')
	var $contacto = $('.hoja7')
	var $botonScroll = $('.button-to-contact-that-performs-scroll')
	var contador = 1;

	$(".icon-menu2").click(function(){
		if(contador == 1){
			$menu.animate({
				left: '0%'
			});
			contador = 0;
		}
		else if (contador == 0) {
			$menu.animate({
				left: '-50%'
			});
			contador = 1;
		}
	});

	$acercaLink.click(function(){
		$menu.animate({
			left: '-50%'
		});
		$("body, html").animate({
			scrollTop: $acerca.offset().top
		}, 600);
	});

	$acontecimientosLink.click(function(){
		$menu.animate({
			left: '-50%'
		});
		$("body, html").animate({
			scrollTop: $acontecimientos.offset().top
		}, 600);
	});

	$proyectosLink.click(function(){
		$menu.animate({
			left: '-50%'
		});
		$("body, html").animate({
			scrollTop: $proyectos.offset().top
		}, 600);

	});

	$serviciosLink.click(function(){
		$menu.animate({
			left: '-50%'
		});
		$("body, html").animate({
			scrollTop: $servicios.offset().top
		}, 600);
	});

	$contactoLink.click(function(){
		$menu.animate({
			left: '-50%'
		});
		$("body, html").animate({
			scrollTop: $contacto.offset().top
		}, 600);
	})


	$botonScroll.click(function(){
		$("body, html").animate({
			scrollTop: $contacto.offset().top
		}, 600);
	});


	var mapawili= document.getElementById("mapa");

	if(navigator.geolocation){

		var miUbicacion=new google.maps.Geocoder();
		
		var direccion={
			address: "Av Universitaria, Av Revolucion, Villa El Salvador, Lima"
		};

		miUbicacion.geocode(direccion, ocurre);
		function ocurre(datos){

			var coordenadas=datos[0].geometry.location;

			var configurarMapa={
				zoom: 15,
				center: coordenadas
			};
			var crearMapa= new google.maps.Map(mapawili, configurarMapa);

			var configurarIcono={
				position: coordenadas,
				map: crearMapa,
				animation: google.maps.Animation.DROP,
				title: "WidoLab"
			};
			var iconoMapa= new google.maps.Marker(configurarIcono)

			var informacionMapa={
				content: '<div style="width: 200px; height: 130px"> <h1>WidoLab</h1> <h4>La aplicacion sencilla e interactiva de conectarte de una manera original con la comunidad tech a nivel global</h4> </div>'
			};
			var informacion= new google.maps.InfoWindow(informacionMapa);

			google.maps.event.addListener(iconoMapa, 'click', function(){
				informacion.open(crearMapa, iconoMapa);
			});
		}

	}else{
		alert("Tu navegador no nos permite mostrarte el mapa :( ");
	}








	







