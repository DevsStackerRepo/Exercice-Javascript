
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
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom(nom){
    if(nom.length < 2){
        throw new Error("Ce nom est trop court.")
    }
}

function validerEmail(email){
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if(!emailRegExp.test(email)){
        throw new Error("L'email n'est pas valide. ")
    }
}

function afficherMessageErreur(message){
    let spanErreurMessage = document.getElementById("erreurMessage")
    if(!spanErreurMessage){
        let popup = document.querySelector(".popup");
        spanErreurMessage = document.createElement("span");
       spanErreurMessage.id = "erreurMessage";
       popup.append(spanErreurMessage);
   }
   spanErreurMessage.innerText = message;

    }

function gererFormulaire(scoreEmail){
    try{
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        validerNom(nom);

        let baliseEmail = document.getElementById("email");
        let email = baliseEmail.value;
         validerEmail(email);
         afficherMessageErreur("");
         afficherEmail(nom,email,scoreEmail)
    
    } catch(erreur){
        afficherMessageErreur(erreur.message)
    }
   
}
// lancer jeu
function lancerJeu(){
    initAddEventListenerPopup()
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
    })
}

let form = document.querySelector("form");
form.addEventListener("submit",(event) => {
    event.preventDefault();
   
    let scoreEmail = `${score} / ${i}`;
    gererFormulaire(scoreEmail)
})
    afficherResultat(score,i);
}







