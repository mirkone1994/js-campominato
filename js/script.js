var numbers = [];
var numbersUser = [];
var score = 0;
var totalNumber = 0;
var scoreElement = document.getElementById("score");
var userDifficultChoice = prompt("Facile, medio o difficle?");
if (userDifficultChoice == "facile") {
    totalNumber += 100;
} else if (userDifficultChoice == "medio") {
    totalNumber += 80;
} else if (userDifficultChoice == "difficile") {
    totalNumber += 50;
}
while (numbers.length < 16) {
    var sixteen = Math.floor(Math.random() * 100 ) + 1;
    if(numbers.indexOf(sixteen) === -1) {
        numbers.push(sixteen);
    };
}
console.log(numbers);
var i = 0;
while (i < totalNumber) {
    var askNumber = parseInt(prompt("Inserisci un numero da 1 a " + totalNumber));
    if (askNumber < 1 || askNumber > totalNumber || isNaN(askNumber)) {
        alert("Hai inserito un numero errato");
        break;
    } else if(numbers.includes(askNumber)) {
        alert("Hai perso");
        break;
    } else if (numbersUser.includes(askNumber)) {
        askNumber;
    } 
    else numbersUser.push(askNumber);
    score += 1;
    console.log(numbersUser);
    console.log(score);
    i++;
}
scoreElement.innerHTML = "Il tuo punteggio finale è: " + score; 

