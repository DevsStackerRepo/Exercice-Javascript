// listes de mots et phrases
const listeMots = ["Cachalot","Pétunia","Serviette"];
const listePhrases = ["Pas de panque !","La vie, et tout le reste", "Merci pour le poisson"];

// afficher le resultat du jeu
function afficherResultat(score,nbMotsProposes){
    console.log("votre score est de " + score + " sur " + nbMotsProposes);
}

// choisir entre la liste de mots ou phrases
function choisirPhrasesOuMots(){
    let choix = prompt("entrez ('mots' ou 'phrases')");

    while(choix !== "mots" && choix !== "phrases"){
        choix = prompt("entrez ('mots' ou 'phrases')")
    }

    return choix;
}





