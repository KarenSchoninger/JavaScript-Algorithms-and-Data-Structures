// Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// Prevent Object Mutation  (Object.freeze to prevent mutation)
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions (we do not reuse them anywhere else)
var magic = function() {
  return new Date();
};
   // rewrite:
const magic = () => new Date();

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

// Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;  // Con esta modificación, si no se proporciona un segundo argumento value al llamar a la función increment, se asumirá que su valor predeterminado es 1.

// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;


let a = 8, b = 6;
        // Utilizando la asignación de desestructuración para intercambiar los valores
[a, b] = [b, a];

// Destructuring via rest elements
function removeFirstTwo(list) {
  // Utiliza la sintaxis rest para obtener una submatriz a partir del tercer elemento en adelante
  const [, , ...rest] = list;
  return rest;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo); // Resultado: [3, 4, 5, 6, 7, 8, 9, 10]

// Use Destructuring Assignment to Pass an Object as a Function's Parameters










