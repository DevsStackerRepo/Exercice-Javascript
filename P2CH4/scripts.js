// listes de mots et phrases
const listeMots = ["Cachalot","Pétunia","Serviette"];
const listePhrases = ["Pas de panque !","La vie, et tout le reste", "Merci pour le poisson"];

function afficherResultat(score,nbMotsProposes){
    return console.log("votre score est de " + score + " sur " + nbMotsProposes);
}

afficherResultat(3,3);