var numbers = [];
var numbersUser = [];
while (numbers.length < 16) {
    var sixteen = Math.floor(Math.random() * 100 ) + 1;
    if(numbers.indexOf(sixteen) === -1) {
        numbers.push(sixteen);
    };
}
console.log(numbers);
var i = 0
while (i < numbers.length) {
    var askNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
    if (numbers.includes(askNumber)) {
        alert("Hai perso")
        break;
    } else if (numbersUser.includes(askNumber)) {
        askNumber;
    } 
    else numbersUser.push(askNumber);
    console.log(numbersUser);
    i++;
}

