const prompt = require('prompt-sync')()


let choix = prompt("Vous vivez dans une petite maison à la campagne. Ces derniers temps, vous recevez des lettres anonymes déposées chaque nuit par un facteur que vous n’avez jamais vu en journée. Ce soir, un mystérieux paquet est déposé devant votre porte. Vous devez maintenant choisir quoi faire, mais méfiez-vous, chaque décision pourrait vous rapprocher de la vérité… ou d’une fin tragique.")
choix = prompt("Le paquet mystérieux")
choix = prompt("Il est minuit passé. Vous entendez un véhicule s’arrêter devant chez vous. En ouvrant la porte, vous voyez un petit paquet noir posé sur votre paillasson. Le facteur, à moitié dissimulé par l’ombre, vous fixe du trottoir. Un sourire inquiétant s’étire sur ses lèvres.")
choix = prompt("vous avez deux options :")
choix = prompt(" 1 Prendre le paquet et le ramener à l’intérieur.")
choix = prompt(" 2 Ignorer le paquet et refermer la porte.")
choix = prompt("")
while (choix !== '1' && choix !== '2') {
    choix=prompt("choix invalide ! veuillez choisir 1 ou 2 ")
}
if (choix == '1') {
    console.log("Vous ramenez le paquet à l’intérieur. Il est léger mais semble bouger légèrement. Une odeur étrange en émane, et un frisson vous parcourt l’échine. En l’ouvrant, vous trouvez une simple note : “On te surveille”.");
    prompt("Maintenant, vous avez deux choix :")
    choix = prompt(" 3 Chercher des indices dans le paquet.")
    choix = prompt(" 4 brûler le paquet immédiatement.")
    choix = prompt("")
    while (choix !== '3' && choix !== '4') {
        choix=prompt("choix invalide ! veuillez choisir 3 ou 4 ")
    }
} if (choix == '3') {
    console.log("Vous fouillez attentivement le paquet et trouvez une clé ancienne attachée à un morceau de papier avec une adresse. Vous reconnaissez cette adresse : c’est la maison abandonnée de la ville voisine. Votre curiosité vous pousse à vouloir y aller, mais une voix dans votre tête vous dit que c’est une mauvaise idée.");
    choix = prompt("Vous avez deux options :")
    choix = prompt(" 5 Aller à l’adresse indiquée.")
    choix = prompt(" 6 Si vous choisissez d’aller à l’adresse ")
    choix = prompt("")
    while (choix !== '5' && choix !== '6') {
        choix=prompt("choix invalide ! veuillez choisir 5 ou 6 ")
    }
    if (choix == '5') {
        console.log("Vous vous dirigez vers la maison abandonnée. Dès votre arrivée, la porte se referme derrière vous, vous piégeant à l’intérieur. Le facteur apparaît dans l’ombre, son sourire macabre illuminé par la faible lumière de la lune. Vous avez suivi son piège, et maintenant, il est trop tard.");
    } else if (choix == '6') {
        console.log("Vous décidez de ne pas suivre l’adresse et de cacher la clé sous le plancher de votre maison. Cependant, dès que vous le faites, vous commencez à entendre des bruits étranges. Une lettre apparaît sur votre lit, simplement marquée d’un “Je reviendrai”. Le facteur ne vous a pas oublié. Vous avez peut-être gagné du temps, mais à quel prix ? Le facteur vous poursuivra… un jour.");
    }
} else if (choix == '4') {
    console.log("Vous jetez immédiatement le paquet dans votre cheminée et l’allumez. Les flammes lèchent le papier et vous ressentez une étrange satisfaction… jusqu’à ce que vous entendiez un fracas à votre fenêtre. Le facteur se tient là, regardant la fumée s’échapper de votre maison, avec un sourire furieux.");
    choix = prompt("Vous avez deux options :")
    choix = prompt(" 7 Fuir par la porte arrière.")
    choix = prompt(" 8 Rester et affronter le facteur. ")
    choix = prompt("")
    while (choix !== '7' && choix !== '8') {
        choix=prompt("choix invalide ! veuillez choisir '7' ou '8'")
    }
    if (choix == '7') {
        console.log("Vous courez par la porte arrière, mais en regardant en arrière, vous voyez le facteur vous poursuivre. Peu importe où vous allez, il semble toujours savoir où vous êtes. Finalement, épuisé, vous réalisez que fuir est inutile. Vous ne pouvez pas échapper au facteur.");
    } else if (choix == '8') {
        console.log("Vous affrontez le facteur, armé d’un objet lourd. Lorsque vous ouvrez la porte, il n’est plus là. À sa place, une lettre reposant sur le sol, écrite en lettres rouges : Tu as survécu… pour l’instant...");
    }

}else if (choix=='2') {
    console.log("Vous refermez la porte sans toucher au paquet. Vous vous dites que l’ignorer est la meilleure chose à faire. Cependant, après quelques minutes, des coups secs résonnent à la porte, de plus en plus insistants. Le facteur ne partira pas si facilement.");
    prompt("Vous avez deux options :")
    choix=prompt("9 Ouvrir la porte pour affronter le facteur.")
    choix=prompt("10 Fuir par la fenêtre arrière.")
    choix = prompt("")
    while (choix !== '9' && choix !== '10') {
        choix=prompt("choix invalide ! veuillez choisir 9 ou 10 ")
    }
    if (choix=='9') {
        console.log("Vous ouvrez la porte, prêt à affronter le facteur. Il vous tend une lettre, toujours souriant. Elle est adressée à vous, mais quelque chose vous dit que l’ouvrir serait une erreur.");
        prompt("Vous avez deux options :")
        choix=prompt(" 11 Accepter la lettre et l’ouvrir.")
        choix=prompt(" 12 Refuser et refermer la porte.")
        choix = prompt("")
        while (choix !== '11' && choix !== '12') {
            choix=prompt("choix invalide ! veuillez choisir 11 ou 12 ")
        }
        if (choix=='11') {
            console.log("En ouvrant la lettre, un sentiment de terreur absolue vous envahit. Le texte à l’intérieur parle de votre mort imminente, prévue pour cette nuit. Le facteur éclate de rire, tandis que les lumières de votre maison clignotent… puis s’éteignent. Il est venu vous chercher.");
            
        }else if (choix=='12') {
            console.log("Vous refusez la lettre et refermez brutalement la porte. Un cri de frustration retentit de l’autre côté. Quand vous regardez à travers la fenêtre, le facteur a disparu, mais la lettre repose encore là. Vous avez résisté… pour l’instant.");
            
        }
    } else if (choix=='10') {
        console.log("Vous décidez de fuir avant que le facteur ne puisse entrer. Vous sautez par la fenêtre arrière, mais en courant à travers le jardin, vous entendez des pas derrière vous.");
        prompt("Vous avez deux options :")
        choix=prompt(" 13 Courir vers la forêt voisine.")
        choix=prompt("14 Se cacher dans la grange derrière votre maison.")
        choix = prompt("")
        while (choix !== '13' && choix !== '14') {
            choix=prompt("choix invalide ! veuillez choisir 13 ou 14 ")
        }
        if (choix=='13') {
            console.log("Vous courez dans les bois, mais le facteur est toujours derrière vous, ses pas de plus en plus proches. Vous trébuchez et tombez sur le sol humide de la forêt. Il se tient au-dessus de vous, prêt à vous emporter. La forêt ne vous a pas sauvé.");
            
        }else if (choix=='14') {
            console.log("Vous vous cachez dans la grange, retenez votre souffle et attendez. Le facteur marche autour du bâtiment, vous cherchant, mais ne vous trouve pas. Après quelques minutes, tout redevient silencieux. Vous avez réussi à le tromper… pour cette nuit.");
            
        }
    }
}






