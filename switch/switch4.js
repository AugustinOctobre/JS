const objDate = new Date();
const jour = objDate.getDay();
document.getElementById("test").innerHTML = jour;
let message = "";

switch (jour) {
  case 1:
    message = `C'est le Lundi`;
    break;

  case 2:
    message = `C'est le Mardi`;
    break;

  case 3:
    message = `C'est le Mercredi`;
    break;

  case 4:
    message = `C'est le Jeudi`;
    break;

  case 5:
    message = `C'est le Vendredi`;
    break;

  case 6:
    message = `C'est le Samedi`;
    break;

  case 0:
    message = `C'est le Dimanche`;
    break;

  default:
    message = `Tu est dans un autre espace-temps.`;
    break;
}
document.getElementById("test").innerHTML = message;
