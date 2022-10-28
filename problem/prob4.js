/*
    You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method. 
*/

// Solution with for loop:

const array = [1, 9, 17, 22];

let sum = 0;
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    sum = sum + arrayElement;
}
//console.log(sum);

// Solution with reduce function

const total = array.reduce((previous, current) => previous + current, 0);
console.log(total);