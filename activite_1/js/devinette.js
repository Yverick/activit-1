/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;



// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

tentative = 6;

do {
    var userNumber = (prompt("Choisis un chiffre entre 1 & 100"));
    tentative--;
    if (userNumber > solution) {
        alert("le nombre est trop grand");
    } else if (userNumber < solution) {
        alert("le nombre est trop petit");
    } else if (userNumber == solution){
        alert("T'es le meilleur!!!!");
    }

    if (tentative == 0) {
    alert("Retentes ta chance!");
}

} while (tentative > 0);

console.log("(La solution est " + solution + ")");

//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
