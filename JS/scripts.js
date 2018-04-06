// COMENTARIO SEPARADOR
/* Comentario de Explicación
   (Para explicar porciones de código) */


// SCROLL TO ID
/* Al hacer clic en un enlace con anclas,
puedes controlar la velocidad y el estilo del scroll */
$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear'); // En esta linea es donde editas la velocidad y el estilo del scroll.
});