const prompt = require('prompt-sync')()











/*
let test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 7, 5]
let nbrun = []
function combien(finded,nbr) {
    let un = [0]
    for (let i = 0; i < nbr.length; i++) {

        if (nbr[i] == finded) {
            un = nbr[i]
            nbrun++;
        }

    }
    return nbrun
} console.log(combien(1,test));



let test = [1,2,3,4,5]


function sommetableau (td){
    let somme=0 
    let produit = 1
    let moyenne = 0
    for (let i = 0; i < td.length; i++) {
        somme=somme+td[i]
        produit=produit*td[i]
    }
moyenne=somme/5
    console.log(somme);
    console.log(produit);
    console.log(moyenne);
    
}
sommetableau(test)





/*
let go = Number(prompt("ecris un nombre"))
let go1 = Number(prompt("ecris un nombre"))
let go2 = Number(prompt("ecris un nombre"))
let go3 = Number(prompt("ecris un nombre"))
let go4 = Number(prompt("ecris un nombre"))

let test=[go,go1,go2,go3,go4]

console.log(test);

let somme = 0
function sommetableau (td){

    for (let i = 0; i < td.length; i++) {
        somme=somme+td[i]
      
    }
    return somme
}
console.log(sommetableau(test));

/*
let test=[1,2,3,4,5,6,7,8]
let inv = []
function inversetableau (td) {
for (let i= td.length-1; i >= 0; i--) {
    inv.push(td[i])
}

return inv
}
console.log(inversetableau(test));

/*
let test= [1,2,3,4,5,6,7,8,9]
let grd = []

function trouvermax (td) {
    let max=[0]
for (let i = 1; i < td.length; i++) {
    
    if (td[i]>max) {
        max = td[i]
        
    }

}
grd.push(max)
return grd
}
console.log(trouvermax(test));

/*
let test=[1,2,3,4,5,6,7,8]
let pair = []
function filtrerpairs (td){
for (let i = 0; i < td.length; i++) {
    
      if (td[i] % 2===0)  {
        pair.push(td[i])
      }
    
    
}return pair
}
console.log(filtrerpairs(test));


/*
let test = [1,2,3,4,5]
let somme = 0
function sommetableau (td){

    for (let i = 0; i < td.length; i++) {
        somme=somme+td[i]
        
    }return somme
}
console.log(sommetableau(test));





/*
let test = ["abricot","fraise","mangue","pasteque"]
let choice = prompt("entrer un fruit")
while (choice !="mangue") {
    choice = prompt("entrer un autre fruit")
}
function fruit(bon){
    for (let i = 0; i < test; i++) {
        if (test=="mangue") {
            break 
        }
        
    }
}
console.log(fruit(choice));


/*
let alphabet="abcdefghijklmnopqrstuvwxyz"
let choice = (prompt("ente un mot"))
function pangramme (verif){
    verif=verif.toLowerCase()
    for (let i = 0; i < alphabet.length; i++) {
    if (verif.includes (alphabet[i])==false) {
        return false
    }
    
        
}
return true
}
console.log(pangramme(choice));



/*


let choice = Number(prompt("ente un age"))

function estmajeur (age){
    
    if (age>=18) {
        return true
    }else {
        return false
    }

}   console.log(estmajeur(choice));



let bonjour = firstname (" bonjour ")
function firstname (name) {
return name + "alice"

}
console.log(bonjour);
*/