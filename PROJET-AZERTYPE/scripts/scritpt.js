
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
    let listeProposition = listeMots;
let btnValiderMot = document.getElementById("btnValiderMot");
let inputEcriture = document.getElementById("inputEcriture");
afficherProposition(listeProposition[i])
btnValiderMot.addEventListener("click",() => {
    if(inputEcriture.value === listeProposition[i]){
        score++
    }
    i++
    afficherResultat(score,i);
    inputEcriture.value = "";
    if(listeProposition[i] === undefined){
        afficherProposition("le jeu est terminé");
        btnValiderMot.disabled = true;
    }else{

        afficherProposition(listeProposition[i])
    }

})

// gerer les boutons radio
let listesBtnRadio = document.querySelectorAll(".optionSource input");

for(let index = 0 ; index < listesBtnRadio.length ; index++){
    listesBtnRadio[index].addEventListener("change",(event) => {

        if(event.target.value === "1"){
            listeProposition = listeMots;
        }else{
            listeProposition = listePhrases
            
        }
        afficherProposition(listeProposition[i])
    }

    )
}
    afficherResultat(score,i);
}







