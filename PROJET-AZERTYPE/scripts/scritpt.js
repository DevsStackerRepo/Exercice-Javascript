
// afficher le resultat du jeu
function afficherResultat(score,nbMotsProposes){
    let zoneScoreSpan = document.querySelector(".zoneScore span");
    let afficherScore = `
        ${score} | ${nbMotsProposes}
    `
    zoneScoreSpan.innerText = afficherScore;
}

// lancer jeu
function lancerJeu(){
    let score = 0;
    let nbMotsProposes = 0;
    afficherResultat(score,nbMotsProposes);
}








