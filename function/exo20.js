// let h = prompt ("hauteur?");
// let l = prompt ("largeur?");
// surface (l,h)

function init() {
  console.log("dans init");

  let h = prompt("hauteur?");
  let l = prompt("largeur?");
  surface(l, h);
}

function surface(larg, haut) {
  var surf = larg * haut;
  var message = "la surface est de : " + surf + "m2";
  // affiche le resultat
  document.getElementById("test").innerHTML = message;
}

// bonjour("Augustin")
