//#triangle

for(let triangle="#"; triangle.length<8; triangle+="#")
console.log(triangle);
break


for (let triangle="*"; triangle.length<21; triangle+="*")
console.log(triangle);

for(let number=1; number<=100; number++){
    let output="";
    if( number % 3 ==0) output +="Fizz";
    if( number % 5 == 0)  output += "Buzz";
    if (number % 3 ==0 && number % 5==0) output += "FizzBuzz";
    console.log( output || number);
}
    
//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

//Chessboard

let size=8;
let board = "";
for( let y = 0; y< size; y++){
    for (let x = 0; x< size; x++){
        if((x+y)% 2 ==0){
            board += "";
        }else{
            board +="#";
        }
    }
    board +="\n";
}
console.log(board);