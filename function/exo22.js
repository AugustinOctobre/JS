function promptitude() {
  const a = Number(prompt("chiffre 1"));
  const b = Number(prompt("chiffre 2"));
  const c = Number(prompt("chiffre 3"));
  const minimum = petit(a, b, c);
  const lamoyenne = moyenne(a, b, c);
  document.getElementById(
    "test"
  ).innerHTML = `la moyenne est de${lamoyenne} et le minimu = ${minimum}`;
}

function petit(a, b, c) {
  let resultat = Math.min(a, b, c);
  console.log(resultat);
  return resultat;
}

function moyenne(a, b, c) {
  let resultatMoy = (a + b + c) / 3;
  console.log(resultatMoy);
  return resultatMoy;a
}

// petit(a,b,c)

// ---------------------------------------------------------------------
