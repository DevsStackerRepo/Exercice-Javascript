// Ma solution a moi
// let listeMots = ["Cachalot", "Pétunia","Serviette"];
// let score = 0;
// let motUtilisateur = prompt("Entrez un mot de cette liste de mots " +  listeMots[0] + " , " + listeMots[1] + " , " + listeMots[2]);
// if(motUtilisateur === listeMots[0]){
//     score += 1;
// }else if(motUtilisateur === listeMots[1]){
//     score += 1;
// }else if(motUtilisateur === listeMots[2]){
//     score += 1;
// }else{
//     console.log("Vous avez fait une erreur de frappe")
// }
// console.log(score)

const listeMots = ["Cachalot","Pétunia","Serviette"];

let score = 0;

let motUtilisateur = prompt("entrez le premier mot " + listeMots[0]);
if(motUtilisateur === listeMots[0]){
    score++
}


 motUtilisateur = prompt("entrez le premier mot " + listeMots[1]);
if(motUtilisateur === listeMots[1]){
    score++
}


 motUtilisateur = prompt("entrez le premier mot " + listeMots[2]);
if(motUtilisateur === listeMots[2]){
    score++
}
console.log(score)
