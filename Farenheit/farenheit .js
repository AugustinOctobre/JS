var Rep = prompt("Donne moi une température Farenheit");
const Far = Rep - 32;
const Cdiv = 5 / 9;
const Celsius = Far * Cdiv;

var Résultat =
  Rep + "° Farenheit" + ", Corresepond à : " + Celsius + "° Celsius.";

document.write(Résultat);
