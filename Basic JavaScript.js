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














































