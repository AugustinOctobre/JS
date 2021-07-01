var age = prompt("Quel âge as tu?");

let infos = (age>=18) ? "Majeur" : "Mineur";

document.getElementById("test").innerHTML = infos;

