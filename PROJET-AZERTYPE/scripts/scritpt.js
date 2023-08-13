
// afficher le resultat du jeu
function afficherResultat(score,nbMotsProposes){
    let zoneScoreSpan = document.querySelector(".zoneScore span");
    let afficherScore = `
        ${score} | ${nbMotsProposes}
    `
    zoneScoreSpan.innerText = afficherScore;
}

function afficherProposition(proposition){
let zoneProposition = document.querySelector(".zoneProposition");
zoneProposition.innerText = proposition;

}

// lancer jeu
function lancerJeu(){
    let score = 0;
    let i = 0;
let btnValiderMot = document.getElementById("btnValiderMot");
let inputEcriture = document.getElementById("inputEcriture");
afficherProposition(listeMots[i])
btnValiderMot.addEventListener("click",() => {
    if(inputEcriture.value === listeMots[i]){
        score++
    }
    i++
    afficherResultat(score,i);
    inputEcriture.value = "";
    if(listeMots[i] === undefined){
        afficherProposition("le jeu est terminé");
        btnValiderMot.disabled = true;
    }else{

        afficherProposition(listeMots[i])
    }

})
    afficherResultat(score,i);
}








