/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A")
let sum = 10 +20
console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B")
let random = Math.round(Math.random()*20)
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C")
let me = {
  name: "Meridjan",
  surname: "Shoti",
  age: 33
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D")
delete me.age
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E")
let skills = ["Javascript","C#"]
me.skills = skills
console.log(me)
//non ho aggiunto HTML E CSS perché il primo è un linguaggio di markup e il secondo un linguaggio di stile, non sono linguaggi di programmazione

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F")
//aggiungo i linguaggi precedentemente omessi
me.skills.push(...["CSS", "HTML"])
console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G")
//la mancanza di pratica può farti dimenticare un linguaggio
//per non modificare il risultato dell'esercizio precedente stampo un altro oggetto chiamato me2, clonato dall'oggetto me con lo spread operator
let me2 = {...me}
me2.skills.pop()
console.log(me2)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1")
function dice(){
  let r = Math.ceil(Math.random()*6)
  return r
}
console.log(dice())
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2")
function whoIsBigger(){
  let a = dice()
  let b = dice()
  if (b>a){
    return `il numero più grande tra ${a} e ${b} è ${b}`
  }
  else if (a>b){
    return `il numero più grande tra ${a} e ${b} è ${a}`
  }
  else{
    return `i due numeri ${a} e ${b} sono uguali`
  }
}
console.log(whoIsBigger())
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3: la soluzione dell'esercizio 3 si trova alla fine, solo dopo averla fatta partire col bottone")
//ho creato un bottone nell'html per far partire l'esercizio perché sarebbe fastidioso se partisse subito
document.getElementById("esercizio3").addEventListener('click', splitMe)
function splitMe(a){
a = prompt("scrivi una frase da ritornare come un array di parole")
  let parole = a.split(" ")
  console.log("ESERCIZIO 3")
  console.log("l'array risultante è il seguente:")
  console.log(parole)
}
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4: la soluzione dell'esercizio 4 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio4").addEventListener('click', deleteOne)
function deleteOne(stringa,bool){ 
  console.log("ESERCIZIO 4")
  stringa = prompt("inserisci una stringa a cui togliere un carattere")
  bool = confirm("ok è true, cancel è false")
  if (bool === true){
   stringa = stringa.slice(1)
  }
  else{
     stringa = stringa.slice(0, -1)
  }
return console.log(stringa)
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5: la soluzione dell'esercizio 5 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio5").addEventListener('click', onlyLetters)
function onlyLetters(string){
string = prompt("inserisci una stringa mista di lettere e numeri")
let characters = string.split("")
let letters = []
for (element of characters){
  if (isNaN(element) || element === " "){
    letters.push(element)
  }
}
return console.log(letters.join(""))
}
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6: la soluzione dell'esercizio 6 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio6").addEventListener('click', isThisAnEmail)
function isThisAnEmail(email){
  email = prompt("inserisci un'email")
  let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (regex.test(email)===true){
    console.log(`indirizzo inserito ${email} è un indirizzo valido`)
  }
  else {
    console.log(`l'indirizzo inserito ${email} NON è un indirizzo valido`)
  }
}
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7")
function whatDayIsIt(){
  let date = new Date()
  let numGiorno = date.getDay()
  let giorno;
  switch(numGiorno){
    case 0: giorno = "domenica";
      break;
    case 1: giorno = "lunedì";
      break;
    case 2: giorno = "martedì";
      break;
    case 3: giorno = "mercoledì";
      break;
    case 4: giorno = "giovedì";
      break;
    case 5: giorno = "venerdì";
      break;
    case 6: giorno = "sabato";
      break;
  }
  console.log("oggi è " +giorno)
}
whatDayIsIt()
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8: la soluzione dell'esercizio 8 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio8").addEventListener('click', rollTheDices)
function rollTheDices(){
diceNum = parseInt(prompt("inserisci un numero di dadi"))
let rollTheDices = {}
  rollTheDices.values = []
  rollTheDices.sum = 0
if (Number.isInteger(diceNum)){
  for (let i =0; i<diceNum; i++){
  let valore = dice()
  rollTheDices.values.push(valore)
  rollTheDices.sum = rollTheDices.sum + valore
}
}
else {
  alert("inserisci un numero valido")
}
return (console.log(rollTheDices))
}
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9: la soluzione dell'esercizio 9 si trova alla fine, solo dopo aver selezionato una data dal menu apposito")
document.getElementById("esercizio9").addEventListener('change', howManyDays)
function howManyDays(){
  let data = new Date (document.getElementById("esercizio9").value)
  let now = new Date()
  let differenza = now - data
  //converto i millisecondi in giorni e arrotondo per difetto
  diffGiorni = Math.floor(differenza / 1000 / 60 / 60 / 24)
  if(diffGiorni >= 0){
  console.log( "sono passati " +diffGiorni + " giorni") 
  }
  else{
    console.log("mancano "+ Math.abs(diffGiorni) + " giorni")
  }
}
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10: per verificare il funzionamento scegli la data del tuo compleanno dal menu a tendina")
/* document.getElementById("esercizio10").addEventListener('click', isTodayMyBirthday) */
document.getElementById("esercizio10").addEventListener('click', isTodayMyBirthday)
function isTodayMyBirthday(){
  
  giorno = parseInt(prompt("inserisci il giorno del tuo compleanno"))
  mese = parseInt(prompt("inserisci il mese del tuo compleanno")) -1
  let today = new Date()
  if (!Number.isInteger(giorno)||!Number.isInteger(mese)||giorno<=0||giorno>31||mese>12||mese<=0){
    alert("inserisci dei valori validi!")
  }
  else if (giorno === today.getDate() && mese === today.getMonth()){
    console.log("AUGURI, È IL TUO COMPLEANNO OGGI. HAI UN ANNO DI PIÚ, SEI UN ANNO PIÚ VECCHIO, SEI UN ANNO PIÚ VICINO ALLA FINE!")
  }
  else{
    console.log("oggi è il tuo NON compleanno, auguri dal cappellaio matto")
  }
}
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11")
function deleteProp(obj, str){
  obj= {...movies[0]}
  str= "Poster"
  for (key in obj){
    if (key === str){
      delete obj[key]
    }
  }
  console.log(obj)
}
deleteProp()
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12")

function newestMovie(){
  let newest;
for(element of movies){
  for (let i = 0; i< movies.length; i++){
    newest = movies[i]
    if (parseInt(element.Year) >= parseInt(newest.Year)){
      newest = element
    }
  }
}
console.log("il film più nuovo è" + newest.Title)
}
newestMovie()
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13")
function countMovies(){
  return movies.length
}
console.log("i film contenuti nell'array sono: "+ countMovies())
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14")
function onlyTheYears(){
  let years =[]
  for(element of movies){
    years.push(element.Year)
  }
  return years
}
console.log(onlyTheYears())
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15")
function onlyInLastMillennium(){
  millennium = []
  for (element of movies){
    if (parseInt(element.Year)>=2000){
      millennium.push(element)
    }
  }
  return millennium
}
console.log("i film del nuovo millennio sono")
console.log(onlyInLastMillennium())
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16")
function sumAllTheYears(){
  //utilizzo l'array creato con la funzione onlyTheYears()
  let years = onlyTheYears()
  yearsSum = 0
  for(element of years){
    yearsSum += parseInt(element)
  }
  return yearsSum
}
console.log("la somma degli anni di tutti i film è: "+sumAllTheYears())
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17: la soluzione dell'esercizio 17 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio17").addEventListener('click', searchByTitle)
function searchByTitle(a){
a = prompt("cerca un film")
let contains = []
for (element of movies){
  if (element.Title.toLowerCase().includes(a.toLowerCase())){
    contains.push(element)
  }
}
console.log("la parola da te cercata è presente nei seguenti film")
console.log(contains)
return contains
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18: la soluzione dell'esercizio 17 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio18").addEventListener('click', searchAndDivide)
function searchAndDivide(a){
a = prompt("inserisci qualcosa da cercare")
let oggetto ={match: [], unmatch: []}
oggetto.match.push(...movies.filter(element => element.Title.toLowerCase().includes(a.toLowerCase())))
oggetto.unmatch.push(...movies.filter(element => !element.Title.toLowerCase().includes(a.toLowerCase())))
console.log(oggetto)
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19: la soluzione dell'esercizio 19 si trova alla fine, solo dopo averla fatta partire col bottone")
document.getElementById("esercizio19").addEventListener('click', removeIndex)
function removeIndex (a){
  a = prompt("inserisci un numero intero")
  if (Number.isInteger(parseInt((a)))){
    movies.splice(a,1)
  }
  else{
    alert("inserisci un numero valido")
  }
  console.log(movies)
}
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20")
function selectID(){
  let a = document.getElementById("container")
  console.log("il contenuto html dell'elemento selezionato con id è: " + a.innerHTML)
}
selectID()
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21")
function selectTD(){
  let a = document.getElementsByTagName("td")
  console.log("il seguente array contiene i vari elementi selezionati tramite tag: ")
  console.log(a)
}
selectTD()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22")
function stampa(){
  let a = document.getElementsByTagName("td")
  console.log("ecco il contenuto dei td: ")
  for (element of a){
    console.log(element.innerText)
  }
}
stampa()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23")
function coloraLink(){
  link = document.getElementsByTagName("a")
  console.log(link)
  for (let i = 0; i<link.length; i++){
    link[i].style.backgroundColor = "red"
  }
}
coloraLink()
console.log("adesso i link nell'html hanno tutti un background rosso")
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24: clicca sul pulsante 24 per aggiungere un li")
document.getElementById("esercizio24").addEventListener('click', addLI)
function addLI(){
  let list = document.getElementById("myList")
  let LI = document.createElement("li")
  LI.innerText = "sono un list item"
  list.appendChild(LI)
}
console.log("come si può vedere, ogni volta che si preme il pulsante, un list item viene aggiunto")
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 25: clicca sul pulsante 25 per svuotare la lista")
document.getElementById("esercizio25").addEventListener('click', svuotaLista)
function svuotaLista(){
  let list = document.getElementById("myList").innerHTML= ""
}
console.log("come si può vedere, cliccando sul tasto 25, la lista popolata premendo sul tasto 24 viene svuotata")
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26")
function addClass(){
  let a = document.getElementsByTagName("tr")
  for (element of a){
    element.classList.add("test")
  }
}
addClass()
console.log("per verificare che tutto funzioni correttamente stampo la classe di ogni elemento dell'array")
for (let i = 0; i<document.getElementsByTagName("tr").length; i++){
  console.log(document.getElementsByTagName("tr")[i].className)
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27: clicca sul pulsante 27 per far comparire il mezzo albero")
document.getElementById("esercizio27").addEventListener('click', halfTree)
function halfTree(a){
  a = prompt("inserisci un numero intero")
  let leaves = []
  for (i = 0; i<a; i++){
    leaves.push("*")
    console.log(leaves.join(""))
  }
}
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28: clicca sul pulsante 28 per far comparire l'albero")
document.getElementById("esercizio28").addEventListener('click', tree)
function tree(a){
  a = prompt("inserisci un numero intero")
  if (Number.isInteger(parseInt(a))){
    for (let i = 0; i < a; i++) {
      let spaces = " ".repeat(a - i - 1);
      let leaves = "*".repeat(2 * i + 1);
      console.log(spaces + leaves);
}
}
else{
  alert("inserisci un numero valido!")
}
}
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29: clicca sul pulsante 29 per inserire un numero")
document.getElementById("esercizio29").addEventListener('click', isItPrime)
function isItPrime(a){
a = prompt("inserisci un numero intero")
if (Number.isInteger(parseInt(a))===false){
  alert("inserisci un numero valido!")
}
else if(parseInt(a)%2===0){
  console.log(a + " non è un numero primo")
}
else{
  console.log(a + " è un numero primo")
}
}



