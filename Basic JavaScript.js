// Comment Your JavaScript Code:

// These are the basics of JavaScript
/* JavaScript sirve para trabajar 
en la parte interactiva de la web.*/

// Declare JavaScript Variables:
var myName;

// Storing Values with the Assignment Operator:
var a;
a = 7;

// Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator
var a = 9;

// Declare String Variables
var myFirstName = "Karen";
var myLastName = "Schoninger";

// Understanding Uninitialized Variables

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);

// Add Two Numbers 
const sum = 10 + 10;

// Subtract One Number from Another  
const difference = 45 - 33;

// Multiply Two Numbers  
const product = 8 * 10;

// Divide One Number by Another  
const quotient = 66 / 33;

// Increment a Number  
let myVar = 87;  // i++;  is equivalent to i = i + 1;
myVar++;

// Decrement a Number  
let myVar = 11;
myVar --;

// Create Decimal Numbers  
const ourDecimal = 5.7;
const myDecimal  = 5.7;

// Multiply Two Decimals
const product = 2.0 * 2.5;

// Divide One Decimal by Another 
const quotient = 4.4 / 2.0; 

// Finding a Remainder
const remainder = 11 % 3;

// Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

a -=  6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end.";

// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Constructing Strings with Variables
const myName = "Karen";
const myStr = "My name is" + myName + "and I am well!";

// Appending Variables to Strings
const someAdjective = "marvelous";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; 

// Understand String Immutability
let myStr = "Jello World";
myStr = "Hello World"; // only can change redefining the variable

// Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 

// Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1]; 

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; 

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
// The completed sentence will be: "The big dog ran quickly."

// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["karen", 5];

// Nest one Array within Another Array
const myArray = [["myArray"]];

// Access Array Data with Indexes
const myArray = [50, 60, 70]
const myData = myArray[0]

// Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1]; // It shows 8

// Manipulate Arrays With push Method
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); // it shows myArray = [["John", 23], ["cat", 2],["dog", 3]];

// Manipulate Arrays With pop Method
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();  //  is used to pop a value off of the end of an array. 

// Manipulate Arrays With shift Method
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift(); // it removes the first element 

// Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]); // unshift adds the element at the beginning of the array.

// Shopping List
const myList = [
  ["peanuts butter", 1], ["milk", 6],["bread", 1], ["eggs", 12], ["coke", 1]
];

// Write Reusable JavaScript with Functions
function reusableFunction() {  // this code creates the function
  console.log("Hi World")
}
reusableFunction();  // this invokes the function

// Passing Values to Functions with Arguments
function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2);}
functionWithArgs(2,3);

// Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5)  // it returns num * 5

// Global Scope and Functions     -- scope refers to the visibility of variables
let myGlobal = 10; // Declare and initialize the global variable myGlobal

function fun1() {
  oopsGlobal = 5;      // Assign 5 to oopsGlobal without using var, let, or const
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  var myVar = "This is a local variable";

  console.log('inside myLocalScope', myVar);
}

myLocalScope(); // This will log the value of myVar inside the function
// Attempting to access myVar outside of myLocalScope will result in a ReferenceError
// console.log('outside myLocalScope', myVar); // Commented out to prevent the ReferenceError

// Global vs. Local Scope in Functions                 the local variable takes precedence over the global variable.
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();   // will return sweater

// Understanding Undefined Value returned from a Function

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();  // the results are undefined

// Assignment with a Returned Value

let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
  arr.push(item);  // Add the item to the end of the array

  let removedItem = arr.shift();  // Remove the first element from the array and store it in a variable

  return removedItem;     // Return the element that was removed
}

          // Setup
let testArr = [1, 2, 3, 4, 5];

          // Display code
console.log("Before: " + JSON.stringify(testArr)); // Print the original array
console.log(nextInLine(testArr, 6)); // Call the function and print the returned item
console.log("After: " + JSON.stringify(testArr)); // Print the modified array

// Understanding Boolean Values (true/ false)
function welcomeToBooleans() {

  return true; 

}

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

}       // if the function is met, it returns "Yes, that was true".

// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator  (The difference between == and === is that with === if two data of different types are compared, Java does not convert them.
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Practice comparing different values
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) { 
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }

  if (val < 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

// Introducing Else Statements
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    return "5 or Smaller";
  }

  return result;
}

testElse(4);

// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
}
}

testElseIf(7);

// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
  return "Tiny";
  } else if (num < 10) {
  return "Small";
  } else if (num < 15) {
  return "Medium"
  } else if (num < 20) {
  return "Large"
  } else if (num >= 20) {
  return "Huge"
  } 
}

testSize(7);

// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0]; // Hole-in-one!
  } else if (strokes <= par - 2) {
    return names[1]; // Eagle
  } else if (strokes === par - 1) {
    return names[2]; // Birdie
  } else if (strokes === par) {
    return names[3]; // Par
  } else if (strokes === par + 1) {
    return names[4]; // Bogey
  } else if (strokes === par + 2) {
    return names[5]; // Double Bogey
  } else if (strokes >= par + 3) {
    return names[6]; // Go Home!
  }
}

console.log(golfScore(5, 4)); // Ejemplo de uso

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "No match"; 
  }
  return answer;
}

console.log(caseInSwitch(1)); // will return "alpha"

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case 'a':
      answer = "apple";
      break;
    case 'b':
      answer = "bird";
      break;
    case 'c':
      answer = "cat";
      break;
    default:
      answer = "stuff"; 
  }
  return answer;
}

console.log(switchOfStuff('a')); // it will return "apple"

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Utilizamos una declaración switch para evaluar 'val'
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Out of Range"; // Valor por defecto si 'val' no coincide con ninguno de los casos anteriores
  }
  return answer;
}

console.log(sequentialSizes(1)); // Esto devolverá "Low"

// Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
  case "bob":
  answer = "Marley";
  break;
  case 42:
  answer = "The Answer";
  break;
  case 1:
  answer = "There is no #1";
  break;
  case 99: 
  answer = "Missed me by this much!";
  break;
  case 7:
  answer = "Ate Nine";
 
}

  return answer;
}

chainToSwitch(7);

// Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}

isLess(10, 15);

// Return Early Pattern for Functions
function abTest(a, b) {
  // Verifica si 'a' o 'b' son menores que 0
  if (a < 0 || b < 0) {
    return undefined; // Sale de la función con valor 'undefined'
  }

  // Si 'a' y 'b' son mayores o iguales a 0, realiza el cálculo
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2)); // Ejemplo 

// Counting Cards
let count = 0;

function cc(card) {
  // Función para actualizar el contador en función de la carta
  function updateCount(cardValue) {
    switch (cardValue) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count--;
        break;
    }
  }

  // Verifica si 'card' es un número o una cadena y llama a updateCount en consecuencia
  if (typeof card === 'number') {
    updateCount(card);
  } else {
    switch (card) {
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        updateCount(parseInt(card));
        break;
      case '10':
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        updateCount(card);
        break;
    }
  }

  // Devuelve la decisión (Bet o Hold) y el valor actual del contador
  return count > 0 ? count + ' Bet' : count + ' Hold';
}

console.log(cc(2)); // Ejemplo de uso
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));

// Build JavaScript Objects  (Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.)
// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
const myDog = {
  
  "name": "Bob",
  "legs": 4,
  "tails": 1,
  "friends": ["balls", "other dogs"]

};

// Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;   

// Accessing Object Properties with Bracket Notation
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

console.log(entreeValue); // Esto imprimirá "hamburger"
console.log(drinkValue);  // Esto imprimirá "water"

// Accessing Object Properties with Variables
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;             // Cambia la variable playerNumber a 16
const player = testObj[playerNumber];                 // Utiliza playerNumber como clave para buscar el nombre del jugador en testObj

console.log(player); // Esto imprimirá "Montana"

// Updating Object Properties
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

// Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// Delete Properties from a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

// Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";

  const lookup = {                 // Objeto 'lookup' que mapea valores a cadenas asociadas
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];                  // Utiliza 'val' como clave para buscar en 'lookup'

  return result;
}

console.log(phoneticLookup("charlie")); // Esto devolverá "Chicago"

// Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Verifica si 'obj' tiene la propiedad 'checkProp'
  if (obj.hasOwnProperty(checkProp)) {
    // Si la propiedad existe, devuelve su valor
    return obj[checkProp];
  } else {
    // Si la propiedad no existe, devuelve "Not Found"
    return "Not Found";
  }
}

// Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic.push({    // add a new array to myMusic
  "artist": "Karen",
  "title": "Programming",
  "release_year": 2023, // Año de lanzamiento
  "formats": [
    "CD",
    "Digital",
    "Vinilo"
  ]
});

// Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  // Si el valor es una cadena vacía, eliminar la propiedad 'prop' del álbum 'id'
  if (value === "") {
    delete records[id][prop];
  } else {
    // Si 'prop' no es 'tracks' y 'value' no es una cadena vacía, asignar 'value' al 'prop' del álbum 'id'
    if (prop !== "tracks") {
      records[id][prop] = value;
    } else {
      // Si 'prop' es 'tracks' y 'value' no es una cadena vacía
      if (!records[id].hasOwnProperty("tracks")) {
        // Si el álbum no tiene una propiedad 'tracks', asignar un array vacío
        records[id]["tracks"] = [];
      }
      // Agregar 'value' como el último elemento en el array 'tracks' del álbum 'id'
      records[id]["tracks"].push(value);
    }
  }
  return records;
}

// Iterate with JavaScript While Loops
const myArray = [];

let i = 5;

while (i >=0) {
  myArray.push(i);
  i--;
}

// Iterate with JavaScript For Loops
const myArray = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// Iterate Odd Numbers With a For Loop
const myArray = [];

for (let i = 1; i <10; i +=2) {
  myArray.push(i);
}

// Count Backwards With a For Loop
const myArray = [];
 for (let i = 9; i > 0; i -= 2) {
   myArray.push(i);
 }

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting For Loops
function multiplyAll(arr) {
  let product = 1;

  // Iterate through the main array
  for (let i = 0; i < arr.length; i++) {
    // Iterate through the sub-array
    for (let j = 0; j < arr[i].length; j++) {
      // Multiply the current element with the product
      product *= arr[i][j];
    }
  }

  return product;
}

// Iterate with JavaScript Do...While Loops
const myArray = [];
let i = 10;

do{
  myArray.push(i);
  i++;
}
while (i <11);

// Replace Loops using Recursion
function sum(arr, n) {
  // Caso base: cuando n es igual a 0, la suma es 0
  if (n === 0) {
    return 0;
  } else {
    // Llamada recursiva: suma el elemento en la posición n-1 y los primeros n-1 elementos
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
 
function lookUpProfile(name, prop) {                 // A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you. The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.If both are true, then return the "value" of that property. If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

// Generate Random Fractions with JavaScript
function randomFraction() {

  return Math.random();

}

// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  // Utiliza Math.random() para generar un número decimal aleatorio entre 0 (inclusive) y 1 (exclusive)
  // Luego, multiplica por la diferencia entre myMax y myMin, y suma myMin para ajustar el rango.
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}

// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}

checkSign(10);

// Use Recursion to Create a Countdown
function countdown(n) {
  // Caso base: si n es menor que 1, devolver un array vacío
  if (n < 1) {
    return [];
  } else {
    // Caso recursivo: llama a countdown con n-1 y concatena n al resultado
    const arr = countdown(n - 1);
    arr.unshift(n); // Agrega n al principio del array
    return arr;
  }
}

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  // Caso base: si startNum es mayor que endNum, devolver un array vacío
  if (startNum > endNum) {
    return [];
  } else {
    // Caso recursivo: llama a rangeOfNumbers con startNum+1 y concatena startNum al resultado
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum); // Agrega startNum al principio del array
    return arr;
  }
}







































