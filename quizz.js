const prompt = require('prompt-sync')()
let score=0
let reponses=""
const tab = [
    {question: "Premiere question : Lorsqu'un pancake tombe dans la neige avant le 31 décembre, on dit qu'il est : ", 
    reponse:["A Tombé dans la neige","B Un frizby commestible","C Une kipa surgelée","D la reponse D"],
bonnereponse: "C"},

 {question: "Deuxieme question : Lorsqu'un pancake prend l'avion à destination de Toronto et qu'il fait une escale technique à St Claude, on dit : ", 
    reponse:["A Qu'il n'est pas arrivé a Toronto","B Qu'il etait supposé arrivé a Toronto","C Que'est ce qu'il fout se maudit pancake,tabernacle ?","D la reponse D"],
bonnereponse: "C"},

{question: "Troisieme question : Lorsqu'on invite un pancake à une barmitzva les convives doivent :", 
    reponse:["A L'incité a boire a l'Open Barmitzva","B Lui présenter Raymond Barmitzva ","C Lui offrir des Malabarmitzva","D la reponse D"],
bonnereponse: "C"},

{question: "Quatrieme question : Au cours de quel évenement historique a été créer le pancake ?", 
    reponse:["A En 1618, pendant la guerre des croissants au beurre","B En 1702, pendant le massacre du Saint Panini ","C En 112 avant Celine Dion pendant la prise de la brioche","D la reponse D"],
bonnereponse: "D"},

{question: "Derniere Questions : Quel est le secret d’un pancake parfaitement moelleux ?", 
    reponse:["A Lui chanter une berceuse avant de le cuire","B Le faire sauter exactement 42 fois sans le faire tomber","C Le laisser reposer dans le frigo avec un bonnet de laine","D la reponse D"],
bonnereponse: "C"},
]

for (let i = 0; i < tab.length; i++) {
        console.log(tab[i].question);
        for (let j = 0; j < tab[i].reponse.length; j++) {
            console.log(tab[i].reponse[j]);
            
        }
    
    reponses=prompt("Entrer une réponse :").toUpperCase();
   
    
    while (reponses !='A' && reponses !='B' && reponses != 'C' && reponses !='D') {
    
        reponses=prompt("choix invalide ! Veuillez entrer une réponse correct !")
    }
    if (reponses===tab[i].bonnereponse) {
        console.log("Bonne réponse !");
        score++
    } else {
        console.log("Mauvaise reponse !");
        
    }
}
console.log("vous avez fait"+" "+ score + " "+"bonne(s) réponse(s)")

/*
let resultat = 0
let choix = prompt("Bienvenue dans qui veut gagner de l'argent en maaaaasse !")
choix = prompt("vous allez devoir repondre a plusieurs questions !")
choix = prompt("Premiere question : Lorsqu'un pancake tombe dans la neige avant le 31 décembre, on dit qu'il est : ")
choix = prompt("A Tombé dans la neige ")
choix=prompt("B Un frizby commestible")
choix=prompt("C Une kipa surgelée")
choix=prompt("D la reponse D")
choix=prompt("Entrer une réponse : ")
choix=choix.toUpperCase()
while (choix !=='A' && choix!=='B' && choix!== 'C' && choix!=='D') {
    
    choix=prompt("choix invalide ! Veuillez entrer une réponse correct !")
}
if (choix=='C') {
    resultat++
    console.log("Bonne réponse ! Passons a la question suivante !");
 
}else if (choix=='A') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
   
} else if (choix=='B') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}else {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}
choix = prompt(" Deuxieme question : Lorsqu'un pancake prend l'avion à destination de Toronto et qu'il fait une escale technique à St Claude, on dit : ")
choix = prompt("A Qu'il n'est pas arrivé a Toronto ")
choix=prompt("B Qu'il etait supposé arrivé a Toronto")
choix=prompt("C Que'est ce qu'il fout se maudit pancake,tabernacle ?")
choix=prompt("D la reponse D")
choix=prompt("Entrer une réponse : ")
choix=choix.toUpperCase()
while (choix !=='A' && choix!=='B' && choix!== 'C' && choix!=='D') {
    choix=prompt("choix invalide ! Veuillez entrer une réponse correct !")
}
if (choix=='C') {
    resultat++
    console.log("Bonne réponse ! Passons a la question suivante !");
 
}else if (choix=='A') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
   
} else if (choix=='B') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}else {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}
choix = prompt(" Troisieme question : Lorsqu'on invite un pancake à une barmitzva les convives doivent : ")
choix = prompt("A L'incité a boire a l'Open Barmitzva ")
choix=prompt("B Lui présenter Raymond Barmitzva")
choix=prompt("C Lui offrir des Malabarmitzva")
choix=prompt("D la reponse D")
choix=prompt("Entrer une réponse : ")
choix=choix.toUpperCase()
while (choix !=='A' && choix!=='B' && choix!== 'C' && choix!=='D') {
    choix=prompt("choix invalide ! Veuillez entrer une réponse correct !")
}
if (choix=='A') {
    resultat++
    console.log("Bonne réponse ! Passons a la question suivante !");
 
}else if (choix=='C') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
   
} else if (choix=='B') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}else {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}
choix = prompt(" Quatrieme question : Au cours de quel évenement historique a été créer le pancake ? ")
choix = prompt("A En 1618, pendant la guerre des croissants au beurre ")
choix=prompt("B En 1702, pendant le massacre du Saint Panini")
choix=prompt("C En 112 avant Celine Dion pendant la prise de la brioche")
choix=prompt("D la reponse D")
choix=prompt("Entrer une réponse : ")
choix=choix.toUpperCase()
while (choix !=='A' && choix!=='B' && choix!== 'C' && choix!=='D') {
    choix=prompt("choix invalide ! Veuillez entrer une réponse correct !")
}
if (choix=='D') {
    resultat++
    console.log("Bonne réponse ! Passons a la question suivante !");
 
}else if (choix=='A') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
   
} else if (choix=='B') {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}else {
    console.log("Mauvaise réponse ! Passons a la question suivante !");
}
choix = prompt(" Derniere Questions : Quel est le secret d’un pancake parfaitement moelleux ? ")
choix = prompt("A Lui chanter une berceuse avant de le cuire ")
choix=prompt("B Le faire sauter exactement 42 fois sans le faire tomber")
choix=prompt("C Le laisser reposer dans le frigo avec un bonnet de laine")
choix=prompt("D la reponse D")
choix=prompt("Entrer une réponse : ")
choix=choix.toUpperCase()
while (choix !=='A' && choix!=='B' && choix!== 'C' && choix!=='D') {
    choix=prompt("choix invalide ! Veuillez entrer une réponse correct !")
}
if (choix=='C') {
    resultat++
    console.log("Bonne réponse ! Regardons votre score final !");
 
 
}else if (choix=='A') {
    console.log("Mauvaise réponse ! Regardons votre score final !");
   
} else if (choix=='B') {
    console.log("Mauvaise réponse ! Regardons votre score final !");
}else {
    console.log("Mauvaise réponse ! Regardons votre score final !");
}
console.log("Petit Disclaimer : Ce quizz est issu d'un sketch de Gad Elmaleh à des fins homouristiques ! veuillez appuyer sur entrée pour découvrir votre score");


console.log("vous avez fait"+" "+ resultat+ " "+"bonne(s) réponse(s)");


   


 
*/

