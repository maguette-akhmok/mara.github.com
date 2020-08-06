
var solde = 100;


function roulette() {

    var nombreChoisi = document.getElementById("pari").value;
    var nombreGagnant = Math.floor(Math.random() * 36);
    var perte = parseInt(document.getElementById("perte").value);
    var mise = parseInt(document.getElementById("mise").value);

    if (solde == 0) {
        alert("Votre porte monnaie est vide");
    } else if (mise > solde) {
        alert("La somme misée est supérieure à celle de votre porte monnaie");
    }
    else {


        if (nombreChoisi == 0) {
            alert("Le chiffre zero est apparu ,tu as perdu !");
            solde -= mise;
            perte += mise;
        }
        else if (nombreChoisi == nombreGagnant) {
            alert("Le nombre gagnant est : " + nombreGagnant + " Bravo tu as gagné le diackpot " + mise * 35 + ".000 FCFA");
            solde += (mise * 35);

        }
        else if (nombreChoisi == "pair" && nombreGagnant % 2 == 0) {
            alert("Le nombre gagnant est : " + nombreGagnant + "Un nombre pair est apparu , tu as gagné " + (mise * 2) + ".000 FCFA");
            solde += (mise * 2)
        }
        else if (nombreChoisi == "impair" && nombreGagnant % 2 != 0) {
            alert("Le nombre gagnant est : " + nombreGagnant + " Un nombre impair est apparu , tu as gagné " + (mise * 2) + ".000 FCFA");
            solde += (mise * 2)
        }
        else {
            alert("Le nombre gagnant est : " + nombreGagnant + " tu as perdu !")
            solde -= mise;
            perte += mise;
        }

        document.getElementById("solde").value = solde;
        document.getElementById("perte").value = perte;
    }
}
