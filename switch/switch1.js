var age = Number(prompt("Quel âge as tu?"));

switch (true) {
  case age > 18:
    document.getElementById("test").innerHTML = `Bienvenue!`;
    break;

  case age === 18:
    document.getElementById("test").innerHTML = `Félicitation tu est majeur!`;
    break;

  case age < 18:
    document.getElementById("test").innerHTML = `Grandit encore un peut...`;
    break;

  default:
    document.getElementById("test").innerHTML = `Ton age stp.`;
    break;
}
