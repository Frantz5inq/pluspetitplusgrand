
/*
1. Au chargement de la page, on va générer un nombre entier aléatoire entre 1 et 1000 (C'est le nombre que va devoir deviner le joueur)
2. On demande au joueur de rentrer un entier dans une boite de dialogue.
3. On indique au joueur via un popup si le nombre à trouver est plus petit ou plus grand.
*/

/* FONCTIONS == boite à outils de mon code / de mon jeu */
function promptForNumber(min, max) {

  var userNumber;
  var error = false;

  do {
    // ici on récupère dans la var guess, la saisie de l'utilisateur (string)
    userNumber = window.prompt('Saisissez un entier entre ' + min + ' et ' + max);

    // Comment s'assurer que l'utilisateur saisisse un entier valide ?
    // version courte :
    // si saisie vide ou Number(saisie) est un NaN Alors Erreur
    error = !userNumber
      || isNaN(Number(userNumber))
      || Number(userNumber) > max
      || Number(userNumber) < min
      || !Number.isInteger(Number(userNumber));

    if(error) {
      window.alert('Ceci n\'est pas un entier valide');
    }
  }
  while(error)

  // si j'arrive ici, je suis sortie de la boucle <==> l'utilisateur a fait une saisie valide. Je dois la retourner
  return Number(userNumber);

  // version longue pour la condition :
    // vérifier si la saisie est vide
    // if(!userNumber) {
    // if(userNumber.length === 0) {
    //   error = true;
    // }
    // else {
    //   // Vérifier si la saisie est valide (si c'est bien un Number)
    //   // on transforme/"cast" le string en Number :
    //   userNumber = Number(userNumber);
    //   if(userNumber === NaN) {
    //     error = true;
    //   }
    // }
}

/*
Pourquoi créer une fonction pour générer ce nombre aléatoire ?
- pour pouvoir la réutiliser facilement (ex: si on veut pouvoir faire plusieurs partie )
Pourquoi proposer une fonction avec des paramètres ? pour pouvoir l'utiliser avec des données de base dont la vleur diffère, alors que le traitement reste le même
*/
function getRandomInt(min, max) {
  var nbAleatoire = Math.floor(Math.random() * ( max-min+1 ));
  return nbAleatoire;
}

// ------------------------
function partie() {

  // 1. Au chargement de la page, on va générer un nombre entier aléatoire entre 1 et 1000 (C'est le nombre que va devoir deviner le joueur)
  var randomNumber = getRandomInt(0, 1000);
  console.log('réponse : ' + randomNumber);


  // pour limiter le nombre de tentatives, on va les compter
  // on initialise donc le compteur à 0
  var attempts = 0;

  // 4. Tant qu'on n'a pas trouvé, on revient au 2.
  do {
    /*
    2. On demande au joueur de rentrer un entier dans une boite de dialogue.
       ET on doit donc vérifier que la saisie est valide//ou sinon redemander la saisie
    */
    var guess = promptForNumber(0, 1000);
    console.log('tentative : ' + guess);

    // incrémentation du compteur de tentatives
    // attempts = attemps + 1;
    attempts++;

    /*
    3. On indique au joueur via un popup si le nombre à trouver est plus petit ou plus grand.
    */
    // si guess === randomNumber => 'gagné'
    if (guess > randomNumber) {
      window.alert('plus petit, il te reste ' + (10-attempts) + ' chances');
    }
    else if (guess < randomNumber) {
      window.alert('plus grand, il te reste ' + (10-attempts) + ' chances');
    }

  } while (guess !== randomNumber && attempts < 10)

  // si on sort de la boucle ==> on a trouvé OU on a atteint le nb max de tentatives

  // 5. Lorsque le joueur trouve le bon entier, ça affiche un popup célébrant sa victoire.
  if(guess === randomNumber) {
    window.alert('gagné !!');
  }
  else {
    // 6. Si le joueur n'a pas trouvé au bout de 10 tentatives, on affiche un message de défaite.
    window.alert('Perdu, better luck next time !');
  }
}
//-----------------------------
