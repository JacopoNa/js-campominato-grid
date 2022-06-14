// CAMPO MINATO

// utente sceglie (con un prompt) il livello di difficoltà in base al range di numeri possibili di gioco:
    // - (1) tra 1 e 100, -(2) tra 1 e 81, (3) tra 1 e 49
// computer genera 16 numeri random (bombe) nel range prescelto che non possono essere duplicati --> game max range (100, 81, 49)
// finchè il gioco non è finito:
    // utente inserisce un numero alla volta (prompt)
        // se il numero inserito è presente nella lista delle "bombe" --> gioco finito --> messaggio 
        // altrimenti il gioco va avanti finchè si raggiunge il massimo numero di tentativi possibili (game max range - "bombe"(16))--> gioco finito --> messaggio
// al termine della partita sofware comunica numero di volte che l'utente ha scelto un numero che non era nelle bombe (punteggio)

// -------------------------------------------

// FUNZIONI

// funzione che genera numeri random (in un range) e li aggiunge ad un array vuoto, solo se il numero generato non è gia presente nell'array
function generateRandomBombs(minBombRange, maxBombRange, totalBombsNum) {

    // ciclo for che genera un numero random tante volte quanto la lunghezza di "totalBombsNum" e le pusha nell'array vuoto solo se il numero non è già presente
   for(let i = 0; i < totalBombsNum; i++) {
        let randomNumb = getRndInteger(minBombRange, maxBombRange);

        if (!bombsArray.includes(randomNumb)) {
            bombsArray.push(randomNumb)
        } 
        console.log(bombsArray)
   }
}

// funzione che genera numeri random
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// ---------------------------------------------


// utente sceglie livello
const userRange = parseInt(prompt('Scegli il livello di difficoltà, scrivi 1, 2 o 3.'));

// range per ogni livello
const minRange = 1;

let maxRange;

if (userRange === 1) {
    maxRange = 100;
} else if (userRange === 2) {
    maxRange = 81;
} else if (userRange === 3){
    maxRange = 49;
}

// array vuoto da popolare con le "bombe"
let bombsArray = [];

// utilizzo della funzione che genera le bombe
let bombs = generateRandomBombs(minRange, maxRange, 16)


