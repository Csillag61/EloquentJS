//methods

let array = [ 1, 2, 3, 4, 5, 6 ];
array.push(7);
console.log(array);
console.log(array.pop());
console.log(array);

function range(start, end, step = start < end ? 1 : -1) {
	//conditional ternary operator
	//ternary:                   (condition) ? value_if_true : value_if false;
	let array = [];
	if (step > 0) {
		for (let i = start; i <= end; i += step) array.push(i);
	} else {
		for (let i = start; i > -end; i += step) array.push(i);
	}
	return array;
}
console.log(range(1, 10));

function sum(array) {
	total = 0;
	for (let value of array) {
		total += value;
	}
	return total;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));

function range(start, end) {
	let array = [];
	for (let i = start; i <= end; i++) array.push(i);
	return array;
}
console.log(range(1, 10));

function sum(array) {
	let total = 0;
	for (let value of array) {
		total += value;
	}
	return total;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

//NEW array with the same elements, reversed
function reverseArray(array) {
	let output = [];
	for (let i = array.length - 1; i > 0; i--) {
		output.push(array[i]);
	}
	return output;
}

//modifies the given argument by reversing its elements
function reverseSameArray(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let sameOld = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = sameOld;
	}
	return array;
}
//list is a nested set of objects, the first object holds the reference to the next one

let list={
    value: 1,
    rest:{
        value:2,
        rest:{
            value: 3,
            rest: null
        }

    }

};
function arrayToList(array){
    let list = null;
    for (let i = array.length -1; i>=0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list){
    let list = null;
    for(let node=list; node; node=node.rest){
        array.push(node.value);
    }
    return array;

}
function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function deepEqual(a, b) {
    if (a === b) return true;//both are objects
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true