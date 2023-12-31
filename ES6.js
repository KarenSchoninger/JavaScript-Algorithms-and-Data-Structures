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
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0; 

// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];

  for (const item of arr) {
    failureItems.push(`<li class="text-warning">${item}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => 
  ({ name, age, gender });

// Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// 
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); 


// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(temperatureFahrenheit) {
    this._temperatureFahrenheit = temperatureFahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this._temperatureFahrenheit - 32);
  }

  set temperature(temperatureCelsius) {
    this._temperatureFahrenheit = (temperatureCelsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Estableciendo en escala Fahrenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius

// Create a Module Script
<html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>

// Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

// Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

// Import a Default Export
import subtract from './math_functions.js';

subtract(7,4);

// Create a JavaScript Promise
const makeServerRequest = new Promise ((resolve, reject) => {

});

// Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer = true; // Cambia este valor para probar diferentes escenarios
    
  if(responseFromServer) {
    // Si responseFromServer es verdadero, llamamos al método resolve
    resolve("We got the data"); // Resolvemos la promesa con el mensaje de éxito
  } else {  
    // Si responseFromServer es falso, llamamos al método reject
    reject("Data not received"); // Rechazamos la promesa con el mensaje de error
  }
});

     // Ejemplo de uso de la promesa
makeServerRequest
  .then((result) => {
    console.log(result); // Imprime "We got the data" si la promesa se resuelve con éxito
  })
  .catch((error) => {
    console.log(error); // Imprime "Data not received" si la promesa se rechaza
  });

// Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

    // Utiliza .then() para manejar el éxito
makeServerRequest.then((result) => {
  console.log(result); // Imprime "We got the data" si la promesa se resuelve con éxito
});

// Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error); // Imprime "Data not received" si la promesa se rechaza
  });






















