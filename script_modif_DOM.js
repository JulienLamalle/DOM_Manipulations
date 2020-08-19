function changeTitles(){
  document.getElementsByClassName("jumbotron-heading").item(0).innerHTML = "Ce que j'ai appris à THP";
  document.getElementsByClassName("lead text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

changeTitles;

function changeCallToActions() {
  document.getElementsByTagName("main")[0].getElementsByTagName("section")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[1].getElementsByTagName("a")[0].innerHTML = "OK je veux tester !";
  document.getElementsByTagName("main")[0].getElementsByTagName("section")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[1].getElementsByTagName("a")[0].href = "http://www.thehackingproject.org";
  document.getElementsByTagName("main")[0].getElementsByTagName("section")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[1].getElementsByTagName("a")[1].innerHTML = "Non Merci";
  document.getElementsByTagName("main")[0].getElementsByTagName("section")[0].getElementsByTagName("div")[0].getElementsByTagName("p")[1].getElementsByTagName("a")[1].href = "https://www.pole-emploi.fr/accueil/";
}

changeCallToActions();


function changeLogoName(){
  document.getElementsByTagName("strong")[0].innerHTML = "The THP Experience";
  document.getElementsByTagName("strong")[0].style.fontSize = "2em";
}

changeLogoName();

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  for (let i = 0; i < imagesArray.length; i++) {
    let cardImage = document.getElementsByClassName('card-img-top').item(i);
    cardImage.setAttribute('src', imagesArray[i])
  }
}

populateImages();

function deleteLastCards() {
  let cards = document.getElementsByClassName('card mb-4 box-shadow');
  for (let i = 0; i < 3; i++) {
    cards[cards.length -1].remove();
  }
}

deleteLastCards();

function changeCardsText() {
  let cards = document.getElementsByClassName("card-text");
  textToAdd = [ "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
  "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
  "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  for (let i = 0; i < 3; i++) {
    cards[i].innerHTML = textToAdd[i]
  }
} 

changeCardsText();

function changeViewButtons() {
  let buttons = document.getElementsByClassName('btn-group')
  for (let i = 0; i < buttons.length; i++){
    buttons[i].getElementsByTagName("button")[0].classList.remove('btn-outline-secondary');
    buttons[i].getElementsByTagName("button")[0].classList.add('btn-success');
  }
}

changeViewButtons();

function AddDivAndModif() {
  
  let newDiv = document.createElement("div");
  newDiv.className = "row";
  document.getElementsByClassName("album py-5 bg-light")[0].getElementsByClassName("row")[0].appendChild(newDiv);
  document.getElementsByClassName("row")[1].appendChild(document.getElementsByClassName("card mb-4 box-shadow")[2]);
}

AddDivAndModif();

