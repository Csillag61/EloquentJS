//ENCAPSULATIONS

//The core idea in object-oriented programming is to divide programs into 
//smaller pieces and make each piece responsible for managing its own state.
//Different pieces of such a program interact with each other through interfaces
//Properties that are part of the interface are called public. 
//The others, which outside code should not be touching, are called private.

//Separating interface from implementation is a great idea. It is usually called encapsulation.

//METHODS
//methods are properties, that hold function values
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'