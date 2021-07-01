const objDate = new Date();
const jour = objDate.getDay();
document.getElementById("test").innerHTML = jour;

switch (jour) {
  case 1:
    document.getElementById("test").innerHTML = `C'est le Lundi`;
    break;

  case 2:
    document.getElementById("test").innerHTML = `C'est le Mardi`;
    break;

  case 3:
    document.getElementById("test").innerHTML = `C'est le Mercredi`;
    break;

  case 4:
    document.getElementById("test").innerHTML = `C'est le Jeudi`;
    break;

  case 5:
    document.getElementById("test").innerHTML = `C'est le Vendredi`;
    break;

  case 6:
    document.getElementById("test").innerHTML = `C'est le Samedi`;
    break;

  case 0:
    document.getElementById("test").innerHTML = `C'est le Dimanche`;
    break;

  default:
    document.getElementById(
      "test"
    ).innerHTML = `Tu est dans un autre espace-temps.`;
    break;
}
