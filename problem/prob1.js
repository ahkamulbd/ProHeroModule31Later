/*
    You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].

    Now convert this array into an even array (array with even 
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even 
    number. 
*/

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [];

// for (let i = 0; i < oddNumbers.length; i++) {
//     const oddNumber = oddNumbers[i];
//     const evenNumber = oddNumber + 1;
//     evenNumbers.push(evenNumber);
// }
//console.log(evenNumbers);

// Solution with 'for of' loop:

// for (const oddNumber of oddNumbers) {
//     const evenNumber = oddNumber + 3;
//     evenNumbers.push(evenNumber);
// }
// console.log(evenNumbers);

// Solution with map:

const evenNumbersMap = oddNumbers.map(oddNumber => oddNumber + 11);
console.log(evenNumbersMap);