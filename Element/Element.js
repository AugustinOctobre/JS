const largeurContaineur = prompt ("Insérez la largeur du containeur");
const largeurMargeExterne = prompt ("Insérez la largeur de la Marge externe");
const nbDeColonnes = prompt ("Insérez le nombre de colonnes");
const largeurDesGoutieres = prompt ("Insérez la largeur des goutières");


const largeurSansMarge=largeurContaineur-(2*largeurMargeExterne);
const largeurSansGoutieres=largeurSansMarge-(nbDeColonnes-1)*largeurDesGoutieres;
const largeurUneColonne=largeurSansGoutieres/nbDeColonnes;

document.getElementById("Tableau").innerHTML=`une colonne vaut : ${largeurUneColonne}`; 

// document.write("une colonne vaut : "+largeurUneColonne);

