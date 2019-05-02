//defining a function
//1.const func=function expression(parameters){body}
const square=function(x){
    return x*x;
};
console.log(square(2));
console.log(square(25));//call the function

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    };
    return result;
};
console.log(power(2, 10));

//lexical scoping-each local scope can see all the scopes that contain it, all scopes can see the global scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };
  //2.function declaration
  function square(x){
      return x*x;
  }//no semicolon required

  //3.arrow funcions=fuc expression=(parameters)=>{function body} added in 2015
  const power= (base, exponent) => {//arrow comes after the parameters
      let result = 1;
      for (let count = 0; count < exponent; count++) {
        result *= base;
      }
      return result;
    };

    const sq1= (x) => { return x*x;}; //one parameter, no parentheses, omit curly and return,single line body function
    const sq2 = x => x*x ;// shorter

  const horn = () => {// no parameter
      console.log("Beep");
  }

  //call stack==is the place where the computer stores the context of the function calls
 // Every time a function is called, the current context is stored on top of this stack.
  //When a function returns, it removes the top context from the stack and uses that context to continue execution.

  //closure
 // being able to reference a specific instance of a local binding in an enclosing scope—is called closure. 
 //A function that references bindings from local scopes around it is called a closure.


 //recursion
 //A function that calls itself is called recursive. 
 function findSolution(target) {
    function find(current, history) {//inner function- find-makes the recursion
      if (current == target) {
        return history;//returns how we find the target
      } else if (current > target) {
        return null;//if no solution can be found, returns null
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));
  // → (((1 * 3) + 5) * 3)