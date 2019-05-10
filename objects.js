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

class Vec{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  plus(otherVec){//method
    return new Vec(this.x + otherVec.x, this.y+ otherVec.y);
  }
  minus(otherVec){//method
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }
  get length(){//getter property  length
    return Math.sqrt(this.x*this.x + this.y*this.y);//The sqrt() method returns the square root of a number.
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//Set holds a collection of values; has add, delete, has methods
class Group{
  constructor() {
    this.members=[];
  }
  add(value){
    if (!this.has(value)){//add only, if this has no value
      this.members.push(value);
    }

  }
  delete(value){
    this.members  = this.members.filter(v => v !== value);
  }
  has(value){
    return this.members.includes(value);
  }
  static from(collection){
    let group = new Group;
    for (let value of collection){
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator](){
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group){
    this.group = group;
    this.position = 0;
  }

  next(){
    if (this.position >= this.group.members.length){
      return {done: true};
    } else {
      let result = { value: this.group.members[this.position],
                      done: false};
      this.position++;
      return result;
    }
  }
}
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

//borrowing a method

let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty(map, "one"));
// → true