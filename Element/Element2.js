let Prenom = prompt ("Quel est ton prénom ?");

let NbSemaines = prompt ("Donne un nombre de semaines");
let NbHeures = prompt ("Donne un nombre d'heures par semaine")
let NbHeureSemaines = NbSemaines*NbHeures;

document.getElementById("Cours").innerHTML=`Bonjour ${Prenom}, ta formation va durer ${NbHeureSemaines} heures.`; 