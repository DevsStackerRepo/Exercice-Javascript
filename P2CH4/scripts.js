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

// lancer boucle de jeu
function lancerBoucleDeJeu(listeProposes){
    let score = 0;
    for(let index = 0 ; index < listeProposes.length ; index++){
        let motUtilisateur = prompt("Tapez ici: " + listeProposes[index]);
        if(motUtilisateur === listeProposes[index]){
            score++
        }
        
    }
    return score;
}

// lancer jeu
function lancerJeu(){
    let score = 0;
    let nbMotsProposes = 0;
    choisirPhrasesOuMots();
    if(choisirPhrasesOuMots() === "mots"){
        score = lancerBoucleDeJeu(listeMots);
        nbMotsProposes = listeMots.length
    }else{
        score = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes = listePhrases.length;
    }

    afficherResultat(score,nbMotsProposes)

}

lancerJeu();






