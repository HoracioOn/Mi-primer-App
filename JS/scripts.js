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



// BOTÓN QUE MANDA AL PRE-MODAL PARA HACER CONFIRMACIÓN
/* Al hacer clic en el botón, gira y se muestra un panel por atrás,
donde aparecen otros dos botones que piden confirmar tu decisión. */
var btngo = document.querySelector( '.btngo' );

var btnFront = btngo.querySelector( '.btngo-front' ),
    btnYes = btngo.querySelector( '.btngo-back .yes' ),
    btnNo = btngo.querySelector( '.btngo-back .no' );

btnFront.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btngo.offsetLeft,
      my = event.clientY - btngo.offsetTop;

  var w = btngo.offsetWidth,
      h = btngo.offsetHeight;
	
  var directions = [
    { id: 'top', x: w/2, y: 0 },
    { id: 'right', x: w, y: h/2 },
    { id: 'bottom', x: w/2, y: h },
    { id: 'left', x: 0, y: h/2 }
  ];
  
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  
  btngo.setAttribute( 'data-direction', directions.shift().id );
  btngo.classList.add( 'is-open' );

} );

btnYes.addEventListener( 'click', function( event ) {	
  btngo.classList.remove( 'is-open' );
} );

btnNo.addEventListener( 'click', function( event ) {
  btngo.classList.remove( 'is-open' );
} );

function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}



// FONDO DEL HEADER
/* Este código cambia el color del header constantemente. */

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;

var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+0+","+g1+","+b1+")";

var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+0+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);