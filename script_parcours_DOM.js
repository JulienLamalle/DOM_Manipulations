//Question 1 :
//Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.

let allParaghraph = document.getElementsByTagName("p").length;
console.log(`il y'a ${allParaghraph} éléments <p>`)


//Question 2 :
//Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.

let allCoucou = document.getElementById("coucou").textContent;
console.log(" ")
console.log(`Le contendu texte de l'élément portant l'ID coucou est : ${allCoucou}`)


//Question 3 :
//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.


let nodes = document.getElementsByTagName('a')[2].href;
console.log(" ")
console.log(`L'URL qui pointe vers le 3ème élément <a> est : ${nodes}`)

//Question 4 :
//Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.

let allComptemoi = document.getElementsByClassName("compte-moi").length;
console.log(" ")
console.log(`Il y'a ${allComptemoi} éléments qui portent la classe compte-moi`)

//Question 5 :
//Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.

let allListComptemoi = document.querySelectorAll("li.compte-moi").length;

console.log(" ")
console.log(`Il y'a ${allListComptemoi} li qui portent la classe compte-moi`)

//Question 6 :
//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.

let allLiInOl = document.querySelectorAll('ol li.compte-moi').length;

console.log(" ")
console.log(`Il y'a ${allLiInOl} li dans des OL qui ont comme class Name : compte-moi`)

//Question 7 :
//Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

let findIt = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].textContent;


console.log(" ")
console.log(`Voici le contenu du li caché : ${findIt}`)
