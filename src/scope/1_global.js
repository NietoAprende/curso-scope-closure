// Variables
// Declaración de variables
var a;

// Declaración y asignación de variables
var b = 'b';

// Reasignación
b = 'bb';

// Redeclaración
var a = 'aa';


// Global Scope
var fruit = 'Apple';

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  // Si una variable se asigna sin declarar en modo no estricto, se creará una variable con SCOPE GLOBAL con dicho nombre
  country = 'Colombia';
  console.log(country);
}

countries();
console.log(country);