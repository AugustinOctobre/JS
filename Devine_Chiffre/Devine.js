// document.getElementById("infos").innerHTML=randomNumber

// randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log (getRandomInt (10));

let Atrouver = getRandomInt(10);
console.log(Atrouver);
console.log(getRandomInt(10));

// verifier();

function verifier() {
  let Proposition = document.getElementById("infos").value;
  if (Proposition == Atrouver) {
    document.getElementById("result").innerHTML = "gagné";
  } else if (Proposition < Atrouver) {
    document.getElementById("result").innerHTML = "Le nombre est plus grand";
  } else if (Proposition > Atrouver) {
    document.getElementById("result").innerHTML = "Le nombre est plus petit";
  } else {
    document.getElementById("result").innerHTML = "perdu"; 
  }
    document.getElementById("historique").innerHTML +=" "+Proposition;

    // verifier()
}
// ---------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}
