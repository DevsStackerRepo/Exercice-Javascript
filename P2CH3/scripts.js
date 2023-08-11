const listeMots = ["Cachalot","Pétunia","Serviette"];

let score = 0;

for(let index = 0 ; index < listeMots.length ; index++){
    motUtilisateur = prompt("Entrez un mot de la liste de mot " + listeMots[index]);
    if(motUtilisateur === listeMots[index]){
        score++
    }
}
console.log(score);