const listeMots = ["Cachalot","Pétunia","Serviette"];

const listePhrases = ["Pas de panique","La vie, l’univers et le reste","Merci pour le poisson"];

let score = 0;

let choisirListMotsOuPhrases = prompt("faite un choix entre ('mots' ou 'phrases' lequel choisisse vous ?)");

while(choisirListMotsOuPhrases !== "mots" && choisirListMotsOuPhrases !== "phrases"){
   choisirListMotsOuPhrases = prompt("faite un choix entre ('mots' ou 'phrases' lequel choisisse vous ?)");
}
if(choisirListMotsOuPhrases === "mots"){
    for(let index = 0 ; index < listeMots.length ; index++){
        motUtilisateur = prompt("Entrez un mot: " + listeMots[index]);
        if(motUtilisateur === listeMots[index]){
            score++
        }
    }
    console.log("votre score est de " + score + " / " + listeMots.length);
}else{
    for(let index = 0 ; index < listePhrases.length ; index++){
        motUtilisateur = prompt("Entrez une phrase: " + listePhrases[index]);
        if(motUtilisateur === listePhrases[index]){
            score++
        }
    }
    console.log("votre score est de " + score + " / " + listePhrases.length);
}
