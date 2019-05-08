

let labels = [];
repeat(5, i => labels.push(`Unit ${i + 1}`)); //1 line of code, omit the {}
console.log(labels);

//Functions that operate on other functions, either by taking them as arguments or
// by returning them, are called higher-order functions.


//abstracting repetition
function repeat(n){
    for (let i=0; i<n; i++){
        console.log(i);
    }
}

function repeat_two(n , action){
    for (let b=0; b<n; b++){
        action(b);
    }
}
repeat_two(3, console.log);

//built-in array method, forEach, that provides something like a 
//for/of loop as a higher-order function.

//One area where higher-order functions shine is data processing

//1.The map method transforms an array by applying a function to all of its elements
// and building a new array from the returned values.
// The new array will have the same length as the input array, 
//but its content will have been mapped to a new form by the function.
//The map() method creates a new array with the results of calling a function for every array element.
//Note: map() does not change the original array.
//array.map(function(currentValue, index, arr), thisValue)
let numbers = [65, 44, 12, 4];

function multiplyArrayElement(num) {
  return num * document.getElementById("multiplyWith").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = numbers.map(multiplyArrayElement);
}

//2.filter function, rather than deleting elements from the existing array,
// builds up a new array with only the elements that pass the test.
// This function is pure. It does not modify the array it is given.
//array.filter(function(currentValue, index, arr), thisValue)

let ages = [32, 33, 12, 40];

function checkAdult(age) {
  return age >= document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

//The forEach() method calls a provided function once for each element in an array, in order.
//array.forEach(function(currentValue, index, arr), thisValue)

//4. reduce (sometimes also called fold). It builds a value by repeatedly taking a single element 
//from the array and combining it with the current value. 
//When summing numbers, you’d start with the number zero and, for each element, add that to the sum.

//5.some method is another higher-order function. It takes a test function and 
//tells you whether that function returns true for any of the elements in the array.

//for/of loop : When you use it to loop over a string, it gives you real characters, not code units.
//If you have a character (which will be a string of one or two code units), 
//you can use codePointAt(0) to get its code.

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
//FLATTENING
let arrays = [[1, 2, 3], [4, 5], [6]];// multidimensional array
console.log(arrays.reduce((flat, current) => flat.concat(current), [])); //to one dimensional array

//LOOP- HOF
function loop(start, test, update, body){
    for (let value =start; test(value); value=update(value)){
        body(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//SOME AND EVERY
function every(array, predicate){
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every2(array, predicate){
    return !array.some(element=> !predicate(element));
}
console.log(every([1,3,5], n => n<10));
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
//WRITING DIRECTION

function dominantDirection(text){
    let counted = countBy(text, char =>{
        let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

    
