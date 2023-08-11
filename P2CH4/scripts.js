// listes de mots et phrases
const listeMots = ["Cachalot","Pétunia","Serviette"];
const listePhrases = ["Pas de panque !","La vie, et tout le reste", "Merci pour le poisson"];

// le compteur ou score initial du jeu
let score = 0;


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

// lancer boucle de jeu
function lancerBoucleDeJeu(listeProposes){
    for(let index = 0 ; index < listeProposes.length ; index++){
        let motUtilisateur = prompt("Tapez ici: " + listeProposes[index]);
        if(motUtilisateur === listeProposes[index]){
            score++
        }
        
    }
}

// lancer jeu

function lancerJeu(){
    let nbMotsProposes = 0;
    choisirPhrasesOuMots();
    if(choisirPhrasesOuMots() === "mots"){
        nbMotsProposes++;
        lancerBoucleDeJeu(listeMots)
    }else{
        nbMotsProposes++;
        lancerBoucleDeJeu(listePhrases)
    }

    afficherResultat(score,nbMotsProposes)

}

lancerJeu();






