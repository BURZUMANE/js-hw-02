'use strict'


let running = true;
const numbers = [];
while(running){
    let userInput = prompt('Enter a number: ');
    if(userInput === null){running = false; break;};
    numbers.push(userInput);
}
let total = 0;
for(const number of numbers){
    total += Number(number);
}
console.log(`The total amount of numbers entered equals to ${total}`);