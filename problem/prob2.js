/*
    You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. 
    Now return/get all the elements which are divisible by 10 using 
    array.filter() method.
*/

const array = [33, 50, 79, 78, 90, 101, 30];

const newArray = array.filter(element => element % 10 === 0);

//console.log(newArray);

const newArrayWithForLoop = [];

for (let i = 0; i < array.length; i++) {
    const index = array[i];
    if (index % 10 === 0) {
        newArrayWithForLoop.push(index);
    }
}
console.log(newArrayWithForLoop);