/*
EVERYTHING IN PROGRAMMING IS AN ACTION THAT TRIGGERS A REACTION!!!
*/


// VARIABLES  -- Variables is a box that you give a name too

console.log("let - allow you to reassin the variable");

let username = "Rene Morales";
username = "Joe Santos" // let can be reassign
console.log(username);

console.log("const  - cannot be reassign unless if you use push");
const store = "macy's"; 
// store = "nike";
console.log(username);

//==================================================================

console.log('Operators - Symbol tht tell the program an action');
//  + - / *  > and more

let x = 25;
x = x + 5;  // this is an operator
console.log(x);

// STRINGS - ANY TEXT YOU PUT IN QUOTES
console.log("name: " + "Rene" );

// Numbers - numbers
console.log((((2 * 4) - 3) + ((25%3) + 20)) / 4); // 6.5
let y = 10;
console.log(y); // 10

let age = 18;
console.log(age == 21 && username == "Bily Ray"); // false

//==================================================================
console.log('Array - A list of values');

let listAr = [23, 234, "billy", "RM", {title: 'Harry Potter'}];
console.log(listAr[3]);

//==================================================================
console.log('Objects - A entity that holds values and methods');

/* 
object is similar to an array but the different is that you can nest
different things inside of an object

*/

let person1 = {
  name: "Rene",
  age: 30,
  favoriteAnimates: ['Dragon Ball z', 'One Punchman'],
  printCity: function () {
    return 'Dallas'
  },
  // you can nest objects by running other property first and then making them objects
  objectA: {
    objectB: 245
  }

};
console.log('Animates: ' + person1.favoriteAnimates + ' ' + 'City: ' + person1.printCity);
// To get inside of another property( objectB )in an object
console.log(person1.objectA.objectB);

//==================================================================
console.log('Booleans - is it true or false');

console.log(4 < 10);

// CONTROL FLOW
let personAge = 18;
// THIS IS A STATEMENT
if(personAge >= 21){
  console.log('you are allow to Drink!! ');
}
else{
  console.log('Sorry!! You are too young to drink');
}

//==================================================================
console.log('EXPRESSIONS VS STATEMENTS');

// -- think of EXPRESSION as a way to return back a value
// -- if it doesnt return a value than that a STATEMENT

console.log((20 * 2 ) >= 40); // expression
console.log( 21 === 21); //expression
console.log(20 > 10 ? "Yes" : "No"); // expression

//==================================================================
console.log('Functions is a reusable code');

// no function  - need to write it multiple time
console.log('Rene' + " " + 'Morales');
console.log('Francia' + " " + 'Morales');
console.log('Lenny' + " " + 'Morales');
console.log('Saviel' + " " + 'Morales');

// Function - writing the code once and make it reusable
console.log('------');
function printMorales(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
  return firstName + ' ' + lastName;
}
printMorales('Rene', 'Morales');
printMorales('Francia', 'Morales');
printMorales('Lenny', 'Morales');
printMorales('Saviel', 'Morales');

//==================================================================
console.log('Loops - are repeatable code');

for(let i = 1; i < 5; i++){
  console.log(`${printMorales("Rene", "Morales")} ${i}`);
}

//==================================================================
console.log('null, infinity, NaN, underfined');

// null - mean that it is going to be empty
let car = null 

// infinity - it mean that it cannot calculate that number 
console.log(1/0);

// NaN - mean not a number
console.log( 24 * 'Rene');

// underfined - means a varibale that has not been assigned a value 
// or not been declared at all
let house;
console.log(house);
