function myFunction() {
    var Mdp = document.getElementById("monMDP");
    if (Mdp.type === "password") {
      Mdp.type = "text";
    } else {
      Mdp.type = "password";
    }
  }