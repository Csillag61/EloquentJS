//Use the reduce method in combination with the concat method to “flatten” 
//an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current)=> flat.concat(current), []));

function loop(start, test, update, body){
    for (let value = start; test(value); value = update(value)) {
        body(value);
      }
    }
    
    loop(3, n => n > 0, n => n - 1, console.log);

    function every(array, test) {
        for (let element of array) {
          if (!test(element)) return false;
        }
        return true;
      }
      
      function every2(array, test) {
        return !array.some(element => !test(element));
      }
      
      console.log(every([1, 3, 5], n => n < 10));
      // → true
      console.log(every([2, 4, 16], n => n < 10));
      // → false
      console.log(every([], n => n < 10));
      // → true

      function dominantDirection(text) {
        let counted = countBy(text, char => {
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