const prompt = require('prompt-sync')()


const attaques = [
    { nom: "Frappe Rapide", puissance: 10, precision: 0.5 },
    { nom: "Soin Léger", puissance: -15, precision: 0.33 },
    { nom: "Coup Puissant", puissance: 20, precision: 0.33 },
    { nom: "Frappe Dévastatrice", puissance: 30, precision: 0.25 },
];


let guerrier = { 
    nom: "Guerrier du Feu",  
    pv: 100, 
    pvmax: 100, 
    attaques: attaques  
};

let lutin = { 
    nom: "Lutin du Dimanche", 
    pv: 100, 
    pvmax: 100, 
    attaques: attaques  
};

console.log("Bienvenue pour la bagarre !");

function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function choix() {
    
    for (let i = 0; i < guerrier.attaques.length; i++) {
        console.log(i + ": " + guerrier.attaques[i].nom);  
        console.log( guerrier.attaques[i].puissance+" "+" pv")
    }

    
    let choix = parseInt(prompt("Choisissez votre attaque (0-3) : "));
    
   
    while (choix < 0 || choix > 3 || isNaN(choix)) {
        choix = parseInt(prompt("Entrez un choix correct (0-3) : "));
    }

    return guerrier.attaques[choix];  
}


function atk(atks, lanceur, adversaire) {
    
    if (Math.random() <= atks.precision) {  
        console.log(lanceur.nom+" "+ "lance"+" "+atks.nom+" "+"!");
        
        if (atks.puissance < 0) {  
            lanceur.pv = Math.min(lanceur.pvmax, lanceur.pv - atks.puissance);  // Correction du soin, ne dépasse pas pvmax
            console.log(lanceur.nom+" "+" se soigne, il a maintenant"+" "+ lanceur.pv+" "+ "PV");
        } else {
            adversaire.pv -= atks.puissance;
            console.log(adversaire.nom+" "+ " subit" +" "+atks.puissance +" "+ "dégâts, il lui reste"+ " "+adversaire.pv +" " +"PV");
        }
    } else {
        console.log(lanceur.nom+" "+ "rate son attaque !");
    }
}

function ltbot() {
    let iaChoice = randomize(0, lutin.attaques.length - 1);
    return lutin.attaques[iaChoice];  
}


while (guerrier.pv > 0 && lutin.pv > 0) {  
    let atkJoueur = choix();  
    atk(atkJoueur, guerrier, lutin);  

    if (lutin.pv <= 0) {  
        console.log("------------------------------------------------");
        console.log(`|                  Gagné                  |`); 
        console.log("------------------------------------------------");
        break;
    }

    let bot = ltbot();  
    atk(bot, lutin, guerrier);  

    if (guerrier.pv <= 0) {  
        console.log("------------------------------------------------");
        console.log(`|              Vous avez perdu              |`);
        console.log("------------------------------------------------");
        break;
    }
}


