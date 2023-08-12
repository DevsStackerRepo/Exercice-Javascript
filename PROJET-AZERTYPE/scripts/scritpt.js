
// afficher le resultat du jeu
function afficherResultat(score,nbMotsProposes){
    let zoneScoreSpan = document.querySelector(".zoneScore span");
    let afficherScore = `
        ${score} | ${nbMotsProposes}
    `
    zoneScoreSpan.innerHTML = afficherScore;
}

// choisir entre la liste de mots ou phrases
// function choisirPhrasesOuMots(){
//     let choix = prompt("entrez ('mots' ou 'phrases')");

//     while(choix !== "mots" && choix !== "phrases"){
//         choix = prompt("entrez ('mots' ou 'phrases')")
//     }

//     return choix;
// }

// lancer boucle de jeu
// function lancerBoucleDeJeu(listeProposes){
//     let score = 0;
//     for(let index = 0 ; index < listeProposes.length ; index++){
//         let motUtilisateur = prompt("Tapez ici: " + listeProposes[index]);
//         if(motUtilisateur === listeProposes[index]){
//             score++
//         }
        
//     }
//     return score;
// }

// lancer jeu
function lancerJeu(){
    
}








