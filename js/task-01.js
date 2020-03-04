'use strict'
function logItems(array){
    for(let i = 0; i < array.length; i++){
        console.log(`[${Number(i + 1)}] - [${array[i]}]`);
    }
}


// ALTERNATIVE
// function logItems(array){
//     for(let item in array){
//         console.log(`[${Number(item) + 1}] - [${array[item]}]`);
//     }
// }


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);