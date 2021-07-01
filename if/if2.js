var age = prompt("Quel âge as tu?");

if (age >= 18) {
  document.getElementById("test").innerHTML = `Bravo tu est majeur !`;
} else if (age < 18) {
  document.getElementById("test").innerHTML = `Grandit encore un peut...`;
} else {
  document.getElementById("test").innerHTML = `Ton age stp.`;
}
