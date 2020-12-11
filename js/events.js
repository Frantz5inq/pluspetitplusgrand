function getRandomInt(min, max) {
  var nbAleatoire = Math.floor(Math.random() * ( max-min+1 ));
  return nbAleatoire;
}

// Tests d'évènements
document.addEventListener('mousemove', function() {

  console.log('trololo');
});


var btn = document.getElementById('start');
btn.addEventListener('mouseover', function() { console.log('HOVER'); });
btn.addEventListener('click', function() { console.log('CLICK'); });
btn.addEventListener('mouseleave', function() { console.log('LEAVE'); });

// On cible un élément du DOM
var div = document.getElementById('truc');

// On crée un évènement sur le "mouseover"
div.addEventListener('mouseover', function() {

  // Lorsque la souris passe sur la 'div', on
  // change la couleur de fond
  div.style.backgroundColor = 'blue';
  // div.style.top = getRandomInt(0, 300) + 'px';
  // div.style.left = getRandomInt(0, 800) + 'px';
});

div.addEventListener('mouseleave', function() {

  // Lorsque la souris passe sur la 'div', on
  // change la couleur de fond
  div.style.backgroundColor = 'red';
});
