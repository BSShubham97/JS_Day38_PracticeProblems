
let a =1 ;
let b=2;
let c= a+b;
console.log("Sum: "+c);

//PRINT A  RANDOM DIGIT

let random= Math.floor(Math.random()*10);
console.log("Random Number: "+random);

//DICE NUMBER BETWEEN 1 TO 6

let diceFaceValue = Math.floor(Math.random()*10 %6)+1;
console.log("Dice Value: "+diceFaceValue);

//ADD TWO RANDOM DICE DIGIT AND PRINT THE VALUE

let diceValue1= Math.floor(Math.random()*10 %6)+1;
console.log("1st Dice Roll: "+diceValue1);
let diceValue2= Math.floor(Math.random()*10 %6)+1;
console.log("2nd Dice Roll: "+diceValue2);
let sum=  diceValue1 + diceValue2;
console.log("Sum of Two Dice: "+sum);

//SUM AND AVERAGE OF FIVE NUMBERS

let digit1= Math.floor(Math.random()*100 %90)+10;
console.log("Digit One: "+digit1);
let digit2= Math.floor(Math.random()*100 %90)+10;
console.log("Digit Two: "+digit2);
let digit3= Math.floor(Math.random()*100 %90)+10;
console.log("Digit Three: "+digit3);
let digit4= Math.floor(Math.random()*100 %90)+10;
console.log("Digit Four: "+digit4);
let digit5= Math.floor(Math.random()*100 %90)+10;
console.log("Digit Five: "+digit5);

let sumOfFive = digit1+digit2+digit3+digit4+digit5;
let avgOfFive = sumOfFive/5;

console.log("Sum of FIVE numbers: "+sumOfFive);
console.log("Average of FIVE numbers: "+avgOfFive);
