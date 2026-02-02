// Challenge 1 <---- DONE!
// Create a function addTwo that accepts one input and adds 2 to it. 


const addTwo = (input:number) => {
     return input + 2;
 }
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2 <---- DONE!
// Create a function addS that accepts one input and adds an "s" to it.

const addS = (input: string) => {
    return (input + "s");
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));


// Challenge 3 <---- DONE!
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/

const map = (arr: number[], callback: (n:number) => number) => {
     return [
        callback(arr[0]),
        callback(arr[1]), 
        callback(arr[2]),
];

};

const addTwo2 = (n:number):number => {
    return n + 2;
}

console.log(map([1, 2, 3], addTwo2));

// Challenge 4 <---- DONE!
/*The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.
*/

let alphabet = "";
const letters = ["a", "b", "c", "d"];

const forEach = (arr: string[], callback: (char: string) => void):void => {
    callback(arr[0]);
    callback(arr[1]);
    callback(arr[2]);
    callback(arr[3]);
}

forEach(letters, function (char) {
  alphabet += char;
});

console.log(alphabet);


