window.addEventListener('load', precargaImagenes);

function precargaImagenes(){

  var img1 = new Image();
  img1.src = 'ppimg/botones/pageleft.png';

  var img2 = new Image();
  img2.src = 'ppimg/rulebook/map.png';

  var img3 = new Image();
  img3.src = 'ppimg/rulebook/region.png';

  var img4 = new Image();
  img4.src = 'ppimg/rulebook/regionZ.png';

  var img5 = new Image();
  img5.src = 'ppimg/rulebook/RuleIssuingCity.png';

  var img6 = new Image();
  img6.src = 'ppimg/rulebook/rulesInner200.png';

  //Cuando se terminan de cargar las imágenes se le agrega la clase "close" a #wrap-preload.
  var preload = document.getElementById('wrap-preload');

  preload.classList.add('close');

  console.log('Sitio cargado!');

}