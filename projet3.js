const prompt = require('prompt-sync')()

const guerrier = "guerrier du feu"

let pvg= 100

const lutin = "sombre lutin"

let pvl = 100
let nom = ""

const attaques = [{nom :"frappe rapide" , puissance : 10 , precision : 0.5},
  { nom: "Soin Léger", puissance: -15, precision: 0.33 },
  { nom: "Coup Puissant", puissance: 20, precision: 0.33 },
  { nom: "Frappe Dévastatrice", puissance: 30, precision: 0.25 }
]

function attaquesaleatoire () {
    return attaques[Math.floor(Math.random() * attaques.length)]
}

function precisiion (aim){
    return Math.random() <= aim.precision
}


for (let i = 0; i < attaques.length; i++) {
    console.log("Attaque:" +" "+[i+1]);
    console.log("Nom:"+ attaques[i].nom);
    console.log("Puissance:" +" " +attaques[i].puissance);
    console.log("Precision:" +" "+ attaques[i].precision*100+"%");
    
}
let choix = Number(prompt("Choisissez une attaque (1: Frappe Rapide, 2: Soin Léger, 3: Coup Puissant, 4: Frappe Dévastatrice)"))
if (choix >= 1 && choix < attaques.length) {
    let attaqueguerrier = attaques[choix];
    console.log(guerrier + ' tente ' + attaqueguerrier.nom)
}





